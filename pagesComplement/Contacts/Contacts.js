@import url("../../styles/variables.css");


.container {
    width: 50vw;
    margin: 50px auto;
    background-color: var(--white);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

form {
    padding: 20px;
}

h2 {
    margin-top: 0;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    resize: vertical;
}

textarea {
    height: 100px;
}

button {
    background-color: var(--primary);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: filter 0.5s;
}

button:hover {
    filter: contrast(0.5);
}

@media(max-width:768px) {
    .container {
        width: 70vw;
    }
}
