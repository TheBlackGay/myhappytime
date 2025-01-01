// 验证日期是否在有效范围内
export function validateBirthDate(date: Date): boolean {
  const minDate = new Date('1900-01-01');
  const maxDate = new Date();
  
  return date >= minDate && date <= maxDate;
}

// 验证时间是否有效
export function validateBirthTime(time: string): boolean {
  const [hours, minutes] = time.split(':').map(Number);
  
  if (isNaN(hours) || isNaN(minutes)) {
    return false;
  }
  
  return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60;
}

// 验证性别是否有效
export function validateGender(gender: string): gender is 'male' | 'female' {
  return gender === 'male' || gender === 'female';
}

// 错误信息类型
export type ValidationError = {
  field: string;
  message: string;
};

// 验证所有输入
export function validateInput(
  date: string,
  time: string,
  gender: string
): ValidationError[] {
  const errors: ValidationError[] = [];
  
  // 验证日期
  if (!date) {
    errors.push({
      field: 'date',
      message: '请输入出生日期'
    });
  } else {
    const birthDate = new Date(date);
    if (!validateBirthDate(birthDate)) {
      errors.push({
        field: 'date',
        message: '出生日期超出有效范围（1900年至今）'
      });
    }
  }
  
  // 验证时间
  if (!time) {
    errors.push({
      field: 'time',
      message: '请输入出生时间'
    });
  } else if (!validateBirthTime(time)) {
    errors.push({
      field: 'time',
      message: '请输入有效的时间格式（HH:mm）'
    });
  }
  
  // 验证性别
  if (!gender) {
    errors.push({
      field: 'gender',
      message: '请选择性别'
    });
  } else if (!validateGender(gender)) {
    errors.push({
      field: 'gender',
      message: '请选择有效的性别'
    });
  }
  
  return errors;
} 