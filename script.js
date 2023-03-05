const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);

class Frame extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const user = {
            id: document.querySelector('#id_input').value,
            name: document.querySelector('#name_input').value,
            username: document.querySelector('#nick_input').value,
            email: document.querySelector('#email_input').value,
            phone: document.querySelector('#phone_input').value,
        };
        console.log(user);
        this.setState(prevState => ({
            users: [...prevState.users, user]
        }), () => {
            console.log(this.state.users);
            this.renderUsers(this.state.users);
        });

    }
    renderUsers(users) {
        const userList = document.querySelector('#user-list');
        userList.innerHTML = '';

        users.forEach((user) => {
            const userHTML = this.generateUserHTML(user);
            userList.insertAdjacentHTML('beforeend', userHTML);
        });
    };
    generateUserHTML(user) {
        return `
    <div class="user-item">
      <h5>User ID: ${user.id}</h5>
      <p>User Name: ${user.name}</p> 
      <p>User Nickname: ${user.username}</p>
      <p>User Email: ${user.email}</p>
      <p>User Phone: ${user.phone}</p>
    </div>
  `;
    };


    render() {
        return <div>
            <ol className="nav" id="navigator">
                <li className="nav-item" id="btn_form_user">
                    <label className="nav-link">Create User</label>
                </li>
                <li className="nav-item" id="btn_form_add_post">
                    <label className="nav-link">Create Post</label>
                </li>
                <li className="nav-item" id="btn_form_get_posts">
                    <label className="nav-link">Get Posts</label>
                </li>
                <li className="nav-item" id="btn_user_list">
                    <label className="nav-link">User List</label>
                </li>
            </ol>
            <div className="form-wrapper">
                <form action="" className="card" id="form_user">
                    <h3 className="card-header">User Form</h3>
                    <label htmlFor="id_input" className="form-label">Enter User ID
                        <input type="number" className="form-control" id="id_input" name="id"/>
                    </label>
                    <label htmlFor="name_input" className="form-label">Enter User Name
                        <input type="text" className="form-control" id="name_input" name="name"/>
                    </label>
                    <label htmlFor="nick_input" className="form-label">Enter User Nickname
                        <input type="text" className="form-control" id="nick_input" name="username"/>
                    </label>
                    <label htmlFor="email_input" className="form-label">Enter User Email
                        <input type="email" className="form-control" id="email_input" name="email"/>
                    </label>
                    <label htmlFor="phone_input" className="form-label">Enter User Phone
                        <input type="text" className="form-control" id="phone_input" name="phone"/>
                    </label>
                    <br></br>
                    <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Send User</button>

                </form>
                <form action="" className="list" id="form_user">
                    <h3 className="card-header">List of Users</h3>
                    <ul className="ul-list" id="user-list">

                    </ul>
                </form>
            </div>
        </div>
    }
}
root.render(<Frame/>);