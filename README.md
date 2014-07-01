ng-filters-br
=============

Filtros dos padrões Brasileiros para quem usa o Angular e seus filtros.

### Instalando via bower

bower install ng-filters-br


Depois de executar só colocar dentro dos módulos de sua aplicação:

var app = angular.module('myApp', ['ngSanitize','brasil.filters']);

### Aplicando o filtro de formatação quando necessário

```javascript
	<h3>Filtros valores reais brasileiros</h3>
 	<p ng-repeat="value in moedas">{{value | realbrasileiro}}</p>
 	<h3>Filtros para CPF</h3>
 	<p ng-repeat="value in cpfs">{{value |cpf}}</p>
 	<h3>Filtros para CNPJ</h3>
 	<p ng-repeat="value in cnpjs">{{value |cnpj}}</p>
  	<h3>Filtros para CEP</h3>
 	<p ng-repeat="value in ceps_br">{{value |cep}}</p>
  	<h3>Filtros para Telefones SP</h3>
 	<p ng-repeat="value in tels_sp">{{value |telefone_sp}}</p>
```
