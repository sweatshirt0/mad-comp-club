import React from "react"
import Divider from "./Divider"

const Login = () => {
	return(
		<div class="login-wrapper">
			<form action="" method="">
				<input type="text" class="username" name="username" placeholder="username..." /><br/><br/>
				<input type="password" class="password" name="password" placeholder="super secret..." /><br/><br/>
				<input type="submit" class="login-button" value="Log In" /><br/><br/>
				<Divider /><br/><br/>
				<div class="register-direct-wrapper">
					<a class="register-direct" href="/register">Create new account</a>
				</div>
			</form>
		</div>
	)
}

export default Login
