export default {
  
  roles(roles = getRoles.data.roles) {
	/*
	@author: Mateus Lannes .
	@description: retorna todas as roles que não se chamem  "Authenticated" ou  "Public".
	@returns {Roles} : todos os dados das roles, já filtradas
	@param {Role} - roles: todas as roles cadastradas no sistema
	*/	

		return roles.filter(  role => role.name !== "Authenticated" && role.name !== "Public")
	}
};
