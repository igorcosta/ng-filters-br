ng-filters-br
=============

Filtros dos padrões Brasileiros para quem usa o Angular e seus filtros.

### Instalando via bower

```bash
$ bower install ng-filters-br
```


Depois de executar só colocar dentro dos módulos de sua aplicação:

```javascript
var app = angular.module('myApp', ['ngSanitize','brasil.filters']);
```

### Aplicando o filtro de formatação quando necessário

É só colocar:

```html
{{value | nome do filtro}}
````

Exemplo abaixo:
```html
	<h3>Filtros valores reais brasileiros</h3>
 	<p ng-repeat="value in moedas">{{value | realbrasileiro}}</p>
 	<h3>Filtros para CPF</h3>
 	<p ng-repeat="value in cpfs">{{value |cpf}}</p>
 	<h3>Filtros para CNPJ</h3>
 	<p ng-repeat="value in cnpjs">{{value |cnpj}}</p>
  	<h3>Filtros para CEP</h3>
 	<p ng-repeat="value in ceps_br">{{value |cep}}</p>
  	<h3>Filtros para Telefones SP</h3>
 	<p ng-repeat="value in tels_sp">{{value |tel}}</p>
```


### Quem não estiver usando o Bower

Para utilizar sem o bower, basta copiar os arquivos na basta dist, seja minificado ou normal.
Vai de sua escolha.

Sugestões,  reclamações. Só fazer um fork, criar pull-requests ou abrir uma issue caso você não
consiga fazer um pull-request.


## Licença

```
  Copyright 2014 Igor Costa

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.