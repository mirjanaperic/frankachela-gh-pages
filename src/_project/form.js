const form = {

    init: function () {
        let url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf7PzkdVaHyDn7EcZ8XQFaxon87KG22re5Gxsd2FtP7O3e7Rw/formResponse";
        let form = document.querySelector("#form"); 

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            fetch(url, {
                method: "POST",
                mode: "no-cors",
                header: {
                    'Content-Type': 'application/json'
                },
                body: getInputData()
            })
                .then(data => {
                    alert("Form Submitted");
                    document.querySelector("#name").value = '';
                    document.querySelector("#email").value = '';
                    document.querySelector("#message").value = '';
                })
                .catch(err => console.error(err));
        });

        function getInputData() {
            let dataToPost = new FormData(); 

            dataToPost.append("entry.442889035", document.querySelector("#name").value);
            dataToPost.append("emailAddress", document.querySelector("#email").value);
            dataToPost.append("entry.1431261949", document.querySelector("#message").value);

            return dataToPost;
        }
    }
};

export default form;