export const getIsFieldDisabled = (isFetching: boolean, isSubmitting: boolean): boolean => {
    return isFetching || isSubmitting;
};
