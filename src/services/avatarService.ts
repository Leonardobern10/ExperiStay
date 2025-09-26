export const getInitials = (userName: string): string => {
    let string = userName.split(' ');
    let initials = '';
    string.forEach((el) => {
        initials += el[0];
    });
    return initials;
};
