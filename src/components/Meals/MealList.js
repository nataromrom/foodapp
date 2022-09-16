import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
    {
        id: "m1",
        name: 'Пицца "Сырная"',
        description:
        "Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо",
        price: 519.00,
    },
    {
        id: "m2",
        name:'Пицца "Пепперони фреш"',
        description: "Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус",
        price: 635.00,
    },
    {
        id: "m3",
        name: 'Пицца "Карбонара"',
        description: "Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, фирменный соус альфредо, итальянские травы",
        price: 615.00,
    },
    {
        id: "m4",
        name: 'Пицца "Домашняя"',
        description:
        "Пикантная пепперони, ветчина, маринованные огурчики, томаты, моцарелла, фирменный томатный соус",
        price: 679.00,
    },
];


const MealList = () => {

    const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem 
        key={meal.id} 
        id={meal.id} 
        name={meal.name} 
        description={meal.description} 
        price={meal.price} />));

    return (
    <section className="meals">
        <Card>
            <ul>{mealList}</ul>
        </Card>
    </section>
    );
};

export default MealList;