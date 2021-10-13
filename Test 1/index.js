// BAI 1:

// let str_input = prompt('Nhập chuỗi kí tự bất kỳ');
// let result = '';
// for(i = str_input.length - 1; i >=0; i--){
//     result += str_input[i];
// }
// alert(result);

//BAI 2:

// let str_input = prompt('Nhap chuoi ki tu bat ky');
// let arr = str_input.toLowerCase().split(" ");

// for(i = 0; i < arr.length; i++){
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice[1];
// }
// str_input = arr.join(" ");
// alert(str_input);

//BAI 3:

// function chuoiso(arr){
//     let newArr = [];
//     for(let i = 0; i < chuoiso.length; i++){
//         if (newArr.indexOf(arr[i]) === -1){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(chuoiso([1, 1, 2, 2, 3, 4, 5, 6, 6, 6, 7, 7]));

//BAI 4:

// let employees = [
//     {
//         name: 'Nguyen Ngoc Lam',
//         age: 24,
//         salary: 5,
//         position: 'Hoc vien',
//     },
//     {
//         name: 'Trieu Huu Dinh',
//         age: 30,
//         salary: 10,
//         position: 'Giao vien',
//     },
//     {
//         name: 'Tong Quang Thanh',
//         age: 27,
//         salary: 8,
//         position: 'Tro giang',
//     },
//     {
//         name: 'Ngo Ngoc Tam',
//         age: 26,
//         salary: 6,
//         position: 'Lop truong',
//     }
// ];

// let options = ['C', 'R', 'U', 'D'];
// whilt(true){
//     let command = ('Nhap hanh dong cua ban (C, R, U, D)');
//     if(command == options[0]){
//         ten = prompt('Nhap ten nhan vien moi');
//         tuoi = prompt('Nhap tuoi nhan vien moi');
//         luong = prompt('Nhap muc luong mong muon');
//         vitri = prompt('Nhap vi tri mong muon');

//         let nhanvienmoi = {};
//         nhanvienmoi.name = ten;
//         nhanvienmoi.age = tuoi;
//         nhanvienmoi.salary = luong;
//         nhanvienmoi.position = vitri;
//         employees.push(nhanvienmoi);
//         alert('Done');
//     } else if(command == options[1]){
//         console.log('Danh sach nhan vien :');
//         for(let i = 0; i < employees.length; i++){
//             console.log(`Name: ${employees[i].name}`);
//             console.log(`Age: ${employees[i].age}`);
//             console.log(`Salary: ${employees[i].salary}`);
//             console.log(`Position: ${employees[i].position}`);
//         }
//     } else if(command == options[2]){
//         let stt = prompt('Nhap vi tri muon update');
//         employees[stt].name = prompt('Nhap ten nhan vien moi');
//         employees[stt].age = prompt('Nhap tuoi nhan vien moi');
//         employees[stt].salary = prompt('Nhap muc luong mong muon');
//         employees[stt].position = prompt('Nhap vi tri mong muon');
//         alert('Done');
//     } else if(command == options[3]){
//         dulieuDelete = prompt('Nhap vi tri cua nhan vien muon xoa');
//         employees.splice(dulieuDelete, 1);
//         alert('Done');
//     } else {
//         alert('Du lieu ban nhap khong kha dung');
//         break;
//     }
// }


