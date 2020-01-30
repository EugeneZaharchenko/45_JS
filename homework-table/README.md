## HomeworkTable

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

##Задание 1
Расширите шаблон компонента, сделанный в задание №1 к уроку №2 «Компоненты». Добавьте в шаблон возможность изменять цвет текста строки таблицы на красный, в случае если значение свойства price > 500.

##Задание 2
Добавьте в источник данных для предыдущего примера свойство Category. Это свойство должно хранить одно из трех возможных значений – Category 1, Category 2, Category 3. Добавьте в шаблон компонента выпадающий список со значениями категорий. Реализуйте логику фильтрации данных в таблице таким образом, чтобы при смене значения в выпадающем списке, в таблице оставались только записи относящиеся к выбранной категории.

##Задание 3
Используя двунаправленную привязку создайте компонент, с помощью которого, можно добавлять новые значения в источник данных для my-table

##Задание 4
Проведите рефакторинг кода, сделанного по любому заданию из урока №3. Перепишите код таким образом, чтобы значения массива products предоставлялись компоненту через сервис.

##Задание 5
Создайте объект let data = {
getData: function() { // вернуть массив products }
}
Измените код первого задания так, чтобы он использовал объект data в качестве сервиса.
