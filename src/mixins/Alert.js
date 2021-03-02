export default {
  methods: {
    AlertSucces(msg) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: "Yeay !! Success",
          text: `${msg}`,
          icon: "success",
          showConfirmButton: false,
          timer: 2300,
          timerProgressBar: true,
          showClass: {
            popup: "animate__animated animate__bounceInUp"
          },
          hideClass: {
            popup: "animate__animated animate__bounceOutDown"
          }
        })
          .then(result => {
            resolve(result);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    AlertError(msg) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: "Something went wrong!",
          icon: "error",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          showClass: {
            popup: "animate__animated animate__bounceInUp"
          },
          hideClass: {
            popup: "animate__animated animate__bounceOutDown"
          },
          text: `${msg}`
        })
          .then(result => {
            resolve(result);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};
