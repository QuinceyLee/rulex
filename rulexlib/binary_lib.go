package rulexlib

import (
	"bytes"
	"encoding/binary"
	"errors"
	"fmt"
	"regexp"
	"rulex/typex"
	"strconv"
	"strings"
	"unicode"

	"github.com/ngaut/log"
	lua "github.com/yuin/gopher-lua"
)

//
// 提取的 Key, 最长不能超过32个字母
//
var pattern = `[a-zA-Z0-9]{1,32}:[1-9]+`
var regexper *regexp.Regexp = regexp.MustCompile(pattern)

type BinaryLib struct {
	regexper *regexp.Regexp
}

func NewBinaryLib() typex.XLib {
	return &BinaryLib{
		regexper: regexp.MustCompile(pattern),
	}
}
func (l *BinaryLib) Name() string {
	return "MatchBinary"
}
func (l *BinaryLib) LibFun(rx typex.RuleX) func(*lua.LState) int {
	return func(state *lua.LState) int {
		expr := state.ToString(2)
		data := state.ToString(3)
		returnMore := state.ToBool(4)
		// log.Debug(expr, data, returnMore)
		t := lua.LTable{}
		for _, kl := range Match(expr, []byte(data), returnMore) {
			t.RawSetString(kl.K, lua.LString(kl.BS))
		}
		state.Push(&t)
		return 1
	}
}

type GetABitOnByteLib struct {
}

func (l *GetABitOnByteLib) Name() string {
	return "GetABitOnByte"
}
func (l *GetABitOnByteLib) LibFun(rx typex.RuleX) func(*lua.LState) int {
	return func(state *lua.LState) int {
		if state.Get(2).Type() != lua.LTNumber {
			state.Push(nil)
			return 1
		}
		b := uint8(state.ToInt(2))
		pos := uint8(state.ToInt(3))
		if v, err := GetABitOnByte(b, pos); err != nil {
			state.Push(nil)
		} else {
			state.Push(lua.LNumber(v))
		}
		return 1
	}
}
func NewGetABitOnByteLib() typex.XLib {
	return &GetABitOnByteLib{}
}

type ByteToBitStringLib struct {
}

func (l *ByteToBitStringLib) Name() string {
	return "ByteToBitString"
}

func (l *ByteToBitStringLib) LibFun(rx typex.RuleX) func(*lua.LState) int {
	return func(state *lua.LState) int {
		data := state.ToString(2)
		state.Push(lua.LValue(lua.LString(ByteToBitString([]byte(data)))))
		return 1
	}
}

func NewByteToBitStringLib() typex.XLib {

	return &ByteToBitStringLib{}
}

//------------------------------------------------------------------------------------
// 自定义实现函数
//------------------------------------------------------------------------------------

//
// 从一个字节里面提取某 1 个位的值, 只有 0 1 两个值
//

func GetABitOnByte(b byte, position uint8) (v uint8, errs error) {
	//  --------------->
	//  7 6 5 4 3 2 1 0
	// |.|.|.|.|.|.|.|.|
	//
	mask := 0b00000001
	if position == 0 {
		return (b & byte(mask)) >> position, nil
	} else {
		return (b & (1 << mask)) >> position, nil
	}
}

//
// 字节转位串
//

func ByteToBitString(b []byte) string {
	s := ""
	for _, v := range b {
		s += fmt.Sprintf("%08b", v)
	}
	return s
}

type Kl struct {
	K  string //Key
	L  uint   //Length
	BS string //BitString
}

func (k Kl) String() string {
	return fmt.Sprintf("KL@ K: %v,L: %v,BS: %v", k.K, k.L, k.BS)
}

//
// Big-Endian:  高位字节放在内存的低地址端, 低位字节放在内存的高地址端。
// Little-Endian: 低位字节放在内存的低地址段, 高位字节放在内存的高地址端
//
type ByteToInt64Lib struct {
}

func (l *ByteToInt64Lib) Name() string {
	return "ByteToInt64"
}

func (l *ByteToInt64Lib) LibFun(rx typex.RuleX) func(*lua.LState) int {
	return func(state *lua.LState) int {
		endian := state.ToInt(2)
		data := state.ToString(3)
		if endian == 1 {
			v := ByteToInt([]byte(data), binary.BigEndian)
			state.Push(lua.LNumber(v))
		} else {
			v := ByteToInt([]byte(data), binary.LittleEndian)
			state.Push(lua.LNumber(v))
		}
		return 1
	}
}

func NewByteToInt64Lib() typex.XLib {
	return &ByteToInt64Lib{}
}

///
func ByteToInt(b []byte, order binary.ByteOrder) uint64 {
	var err error
	// uint8
	if len(b) == 1 {
		var x uint8
		err = binary.Read(bytes.NewBuffer(b), order, &x)
		if err != nil {
			log.Error(b, err)
		}
		return uint64(x)
	}
	// uint16
	if len(b) > 1 && len(b) <= 2 {
		var x uint16
		err = binary.Read(bytes.NewBuffer(b), order, &x)
		if err != nil {
			log.Error(b, err)
		}
		return uint64(x)
	}
	// uint32
	if len(b) > 2 && len(b) <= 4 {
		var x uint32
		err = binary.Read(bytes.NewBuffer(b), order, &x)
		if err != nil {
			log.Error(b, err)
		}
		return uint64(x)
	}
	// uint64
	if len(b) > 4 {
		var x uint64
		err = binary.Read(bytes.NewBuffer(b), order, &x)
		if err != nil {
			log.Error(b, err)
		}
		return x
	}

	return 0
}

/*
*
* 位串转字节
*
 */
type BitStringToBytesLib struct {
}

func (l *BitStringToBytesLib) Name() string {
	return "BitStringToBytes"
}

func (l *BitStringToBytesLib) LibFun(rx typex.RuleX) func(*lua.LState) int {
	return func(state *lua.LState) int {
		data := state.ToString(2)
		b, err := BitStringToBytes(data)
		if err != nil {
			state.Push(nil)
		} else {
			state.Push(lua.LString(string(b)))
		}
		return 1
	}
}

func NewBitStringToBytesLib() typex.XLib {
	return &BitStringToBytesLib{}
}

////////////////////////
func BitStringToBytes(s string) ([]byte, error) {
	b := make([]byte, (len(s)+(8-1))/8)
	for i := 0; i < len(s); i++ {
		c := s[i]
		if c < '0' || c > '1' {
			return nil, errors.New("value out of range")
		}
		b[i>>3] |= (c - '0') << uint(7-i&7)
	}
	return b, nil
}

/*
*
* 大小端判断
*
 */
func Endian(endian byte) binary.ByteOrder {
	// < 小端 0x34 0x12
	if endian == '>' {
		return binary.BigEndian
	}
	// > 大端 0x12 0x34
	if endian == '<' {
		return binary.LittleEndian
	}
	return binary.LittleEndian
}

//
// 字节空位补位0
//
func append0Prefix(n int) string {
	if (n % 8) == 7 {
		return "0"
	}
	if (n % 8) == 6 {
		return "00"
	}
	if (n % 8) == 5 {
		return "000"
	}
	if (n % 8) == 4 {
		return "0000"
	}
	if (n % 8) == 3 {
		return "00000"
	}
	if (n % 8) == 2 {
		return "000000"
	}
	if (n % 8) == 1 {
		return "0000000"
	}
	return ""
}

//--------------------------------------------------------------
// rulexlib:Match
//--------------------------------------------------------------

func Match(expr string, data []byte, returnMore bool) []Kl {
	cursor := 0
	result := []Kl{}
	// log.Debug(pattern, expr[1:])

	matched, err := regexp.MatchString(pattern, expr[1:])
	if matched {
		endian := expr[0]
		// < 小端
		if Endian(endian) == binary.LittleEndian {
			bfs := ByteToBitString(data)
			// <a:12 b:12
			reverseBfs := ReverseString(bfs)
			buildResult(returnMore, cursor, reverseBfs, expr[1:], &result)
		}
		// > 大端
		if Endian(endian) == binary.BigEndian {
			bfs := ByteToBitString(data)
			// <a:12 b:12
			buildResult(returnMore, cursor, bfs, expr[1:], &result)
		}

	} else {
		log.Error(matched, err)
	}
	return result
}

func append0(cursor int, bfs string, returnMore bool, result *[]Kl) {
	if returnMore {
		if cursor < len(bfs) {
			// 是否最后补上剩下的字节
			*result = append(*result, Kl{"_", uint(len(bfs) - cursor), append0Prefix(len(bfs[cursor:])) + bfs[cursor:]})
		}
	}
}
func buildResult(returnMore bool, cursor int, bfs string, expression string, result *[]Kl) {
	for _, v := range regexper.FindAllString(expression, -1) {
		k_l := strings.Split(v, ":")
		k := k_l[0]
		if l, err1 := strconv.Atoi(k_l[1]); err1 == nil {
			if cursor+l <= len(bfs) {
				binString := bfs[cursor : cursor+l]
				*result = append(*result, Kl{
					K:  k,
					L:  uint(l),
					BS: append0Prefix(len(binString)) + binString,
				})
			} else {
				*result = append(*result, Kl{k, uint(l), ""})
			}
			cursor += l
		}
	}
	append0(cursor, bfs, returnMore, result)
}

/*
*
* 逆转位顺序
*
 */
func ReverseBits(b byte) byte {
	result := byte(0)
	for i := 7; i >= 0; i-- {
		result |= ((b << i) >> 7) << i
	}
	return result
}

/*
*
* 逆转字节顺序
*
 */
func ReverseByteOrder(b []byte) []byte {
	for i, j := 0, len(b)-1; i < j; i, j = i+1, j-1 {
		b[i], b[j] = b[j], b[i]
	}
	return b
}

/*
*
* 逆转字符串
*
 */
// Reverse reverses the input while respecting UTF8 encoding and combined characters
func ReverseString(text string) string {
	textRunes := []rune(text)
	textRunesLength := len(textRunes)
	if textRunesLength <= 1 {
		return text
	}

	i, j := 0, 0
	for i < textRunesLength && j < textRunesLength {
		j = i + 1
		for j < textRunesLength && isMark(textRunes[j]) {
			j++
		}

		if isMark(textRunes[j-1]) {
			// Reverses Combined Characters
			reverse(textRunes[i:j], j-i)
		}

		i = j
	}

	// Reverses the entire array
	reverse(textRunes, textRunesLength)

	return string(textRunes)
}

func reverse(runes []rune, length int) {
	for i, j := 0, length-1; i < length/2; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
}

// isMark determines whether the rune is a marker
func isMark(r rune) bool {
	return unicode.Is(unicode.Mn, r) || unicode.Is(unicode.Me, r) || unicode.Is(unicode.Mc, r)
}
