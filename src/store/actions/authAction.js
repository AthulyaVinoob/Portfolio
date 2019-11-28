import API from '../../utils/api';


/*export const login =(email,pass) =>{
	return(dispatch) => {
		API.login(email,pass, res =>{
			console.log("Result",res.data);
			return {
				type:'LOGIN',
				payload :{email,pass}
				payload :{
							email: email,
							token : res.data.id,
							userId :res.data.userId,
							password : pass
						}
			}
		})
	}
}*/
	export const login =(email,pass) =>{
		return {
		type:'LOGIN',
		payload :{email,pass}
	}	
}



export const register =(email, pass) =>{
	return{
		type:'REGISTER',
		payload: {email,pass}
	}
}