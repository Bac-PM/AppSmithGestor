export default {

	data: {},
	doseMaxima() {
		  //getVacinasDeUmCao.run().then(() => {
			
				if (parseInt(Vacinas.triggeredRow.dose_atual) < parseInt(Vacinas.triggeredRow.doses_totais)) {
					
					aplicaAnimalVacinaCriaNextDose.run().then(() => { 
						
						getVacinasDeUmCao.run();
					});



				}else{
				
					getVacinasDeUmCao.run();
				}			

				//});

    
}}




			
		
 