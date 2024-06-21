export default {
	myFun1 () {
		
		if(appsmith.store.roleAtual == get_user.data.role.name){
			return true;
		} else {
			return false;
		}
	} 
}
