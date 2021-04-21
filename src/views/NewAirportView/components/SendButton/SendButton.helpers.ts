export const getIsButtonDisabled = (isValid: boolean, touched: any): boolean => {
    return Object.entries(touched).length === 0 || !isValid;
};
