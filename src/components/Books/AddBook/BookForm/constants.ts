
export const selectStyles = {
  option: () => ({
    borderBottom: '1px dotted black',
    padding: 5,

    "&:hover": {
      backgroundColor: '#c4c4c4',
      cursor: 'pointer',
    }
  }),
  control: (provided: any) => ({
    // ...provided,
    borderRadius: 0,
    border: '1px solid black',
    height: '32px',
    display: 'flex',
  }),

}