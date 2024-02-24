/*học bài số hai ngày 19/1/2024 */





//mang

var y = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"];
var x = 1; 

switch (x) {
    case 1:
        console.log(y[x - 1]);
        break;
    case 2:
        console.log(y[x - 1]);
        break;
    case 3:
        console.log(y[x - 1]);
        break;
    case 4:
        console.log(y[x - 1]);
        break;
    case 5:
        console.log(y[x - 1]);
        break;
    case 6:
        console.log(y[x - 1]);
        break;
    case 7:
        console.log(y[x - 1]);
        break;
    default:
        console.log("Giá trị x không hợp lệ");
}

//bai 2 xac dinh so nguyen to 


function soNguyenTo(so) {
    if (so <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(so); i++) {
        if (so % i === 0) {
            return false;
        }
    }
    return true;
}

//bai 3 matrix

var a = [
    [1 , 1 , 1],
    [1 , 0 , 0],
    [0 , 1 , 0],
    [0 , 0 , 1],
];

for ( var i = 0 ; i < 4 ; i++) {
    for (var j = 0 ; j < 3 ; j++){
        document.write(a[i][j] + " ");
    }
    document.write("<br\>");
}

//bai 4 Regex

function check( username , password ) {
    var checkUser = username.length === 8 ;
    var checkPass = /^(?=.*[@$!%*?&])/.test(password) ; 
    return username & password ;
}


//bài5  khi người dùng nhập html user và pass thì phải gọi hàm check của bài 4 ra 


//bài 6 tạo một đối tượng rồi sau đó check người dùng và đối tượng có === nhau true trả về alexxt
