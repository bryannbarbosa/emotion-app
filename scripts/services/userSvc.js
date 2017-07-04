
app.service('user', function() {
    this.getUserFirstName = function () {
        return 'Bryann';
    }
    this.getUserFullName = function () {
    	return 'Bryann Alves Pereira Barbosa';
    }
    this.getReactions = function () {
    	let data = [{
    	  feeling: 'confiante',
    	  color: 'green'
    	}, {
    	  feeling: 'feliz',
    	  color: 'yellow'
    	}, {
    	  feeling: 'curioso',
    	  color: 'gray'
    	},
    	{
    	  feeling: 'animado',
    	  color: 'orange'
    	}
    	];
    	return data;
    }
});