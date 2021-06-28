export const formatNumber = number => {
    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(number);
}
export const isLogin = () => {
    return !!localStorage.getItem('user');
}
