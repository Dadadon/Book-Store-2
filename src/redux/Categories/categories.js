const CHECK_STATUS = 'BOOK-STORE/categories/CHECK_STATUS';

const checkStatus = () => ({
  type: CHECK_STATUS,
});

const checkStatusReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Work in progress';
    default:
      return state;
  }
};

export default checkStatus;
export { checkStatusReducer };
