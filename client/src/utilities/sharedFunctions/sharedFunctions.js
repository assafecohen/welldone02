export const setInputStyle = input => {
    const { touched, isValid } = input;
    if (!touched) return 'form-control'
    if (isValid) return 'form-control is-valid'
    return 'form-control is-invalid'
}
