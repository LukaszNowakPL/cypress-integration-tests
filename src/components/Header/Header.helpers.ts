export const getSelectedTab = (pathname: string): number => {
    if(pathname.includes('/countries')) {
        return 1;
    }

    return 0;
};