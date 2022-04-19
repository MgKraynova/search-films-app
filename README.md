<p align="center">
<img src="./src/images/screen-for-readme.png" title="Search films app" width="750px" height="500px">
</p>

<h2 align="left">Описание проекта</h2>

Проект представляет собой одностраничное приложение по поиску фильмов. Поиск фильмов осуществляется по базе данных IMDb.

Просмотреть проект можно на GitHub Pages по ссылке: https://mgkraynova.github.io/search-films-app/ либо локально с помощью команды npm run start.

**Цель создания проекта** - закрепление навыков по **React** и **React-router-dom**.

Окончание проекта - апрель 2022 года.

<h2 align="left">Функциональность проекта и использованные технологии</h2>

Внешний вид приложения стилизован с помощью **HTML** и **CSS**. Приложение адаптировано для просмотра на больших экранах.

Вся функциональность написана на **React**:
- хранение состояния осуществляется с помощью хука **useState**;
- при загрузке страницы по роуту /cards или /info с помощью хука **useEffect** проверяется наличие в sessionStorage данных ранее найденных карточек;
- с помощью **react-router-dom** на страницу добавлены разные роуты, переход по ним осуществляется с помощью хука **useNavigate**;
- для получения данных с фильмами отправляется запрос по адресу http://www.omdbapi.com/, в запрос подставляется введенное пользователем значение из input;
- во время загрузки данных с фильмами появляется **прелодер**;
- если фильмы не найдены, пользователя направляют на роут /not-found;
- ошибки обрабатываются с помощью **«предохранителя» (error boundary)**.



<h2 align="left">Планы по доработке проекта</h2>
В дальнейшем планируется адаптировать приложение под маленькие экраны.
