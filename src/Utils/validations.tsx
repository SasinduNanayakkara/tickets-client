export function formatDate(isoDate: string): string {
    const date = new Date(isoDate);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options as any).format(date);
    return formattedDate.replace(/\s/g, ''); // Remove spaces for the desired format
}

export function formatTime(isoDate: string): string {
    const date = new Date(isoDate);
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = new Intl.DateTimeFormat('en-US', options  as any).format(date);
    return formattedTime;
}

export const validateEmail = (email:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export   const validatePhoneNumber = (number:string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

export const validatePassword = (password: string): boolean => {
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /\d/;
    const specialSymbolRegex = /[!@#$%^&*()-=_+{};':"\\|,.<>?/]/;
  
    const hasLowercase = lowercaseRegex.test(password);
    const hasUppercase = uppercaseRegex.test(password);
    const hasDigit = digitRegex.test(password);
    const hasSpecialSymbol = specialSymbolRegex.test(password);
  
    return hasLowercase && hasUppercase && hasDigit && hasSpecialSymbol;
  }