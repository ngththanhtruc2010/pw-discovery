console.log("This is solution");

// Javascript

// thiết lập công thức

function caculateBMI(height: number, weight: number) {
    const BMI = weight / (height * height);
    let bodyType = '';

    // điều kiện

    if (BMI < 18.5) {
        bodyType = ' Gầy ';
    } else if (BMI < 24.9) {
        bodyType = ' Bình thường ';
    } else if (BMI < 29) {
        bodyType = ' Thừa cân ';
    } else {
        bodyType = ' Béo phì ';
    }

    return {
        bmi: BMI,
        bodyType: bodyType
    }
}

// Kết quả 
const result = caculateBMI(1.63, 52);
console.log(`- Kết quả BMI: ${result.bmi.toFixed(2)}`);
console.log(`- Phân loại: ${result.bodyType}`);










// # Playwright
// ## Đề bài
// Viết code automation cho test case sau:
// - Đi tới trang: https://material.playwrightvn.com/
// - Click vào: Bài học 1: Register Page (có đủ các element)
// - Điền vào username, email. Click button register.
// - Kiểm tra kết quả có chứa username và email tương ứng

// ## Demo
// ![Demo image](../images/001-2024-09-01.gif)
