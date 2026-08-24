// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// Gallery Filtering
function filterGallery(category) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter items
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 10);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Form Submissions
function handleBooking(e) {
    e.preventDefault();
    const name = document.getElementById('parentName').value;
    const pkg = document.getElementById('package').value;
    alert(`Thank you, ${name}! Your reservation for the ${pkg} has been received. We will contact you shortly to confirm.`);
    e.target.reset();
}

function handleContact(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
}

// Set minimum date for booking to today
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // Parallax effect for Spiderman image
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.parallax-img');
        if (parallax) {
            parallax.style.transform = `scale(1.1) translateY(${scrolled * 0.5}px)`;
        }
    });

    // Scroll-in animations
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(el => {
        scrollObserver.observe(el);
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Restaurant menu carousel
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('foodCarousel');
    if (!carousel) return;

    const menuItems = [
        ['Chicken Special (Local)', 'Specials', '25,000 / 15,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Chicken Special (Modern)', 'Specials', '30,000 / 17,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Spiderman Special Chicken', 'Specials', '35,000 / 20,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Beef Special', 'Specials', '30,000 / 17,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Chicken Whole (Local)', 'Specials', '18,000 / 12,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Goat Leg', 'Specials', '20,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Goat Ribs', 'Specials', '18,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Goat Leg Special', 'Specials', '25,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Osso Buco', 'Specials', '30,000 / 15,000 FRW', 'Braised beef osso buco with fresh herbs and house potatoes.'],
        ['Chairman Pork', 'Specials', '10,000 FRW', 'Marinated pork, African style fried, served with Gaccumbavali and a choice accompaniment.'],
        ['Spiderman Beef Full', 'Specials', '40,000 FRW', 'Marinated tomahawk steak, African style, with lemon and caramelized onions.'],
        ['Chicken Platter', 'Specials', '30,000 FRW', 'Buffalo wings, chicken thighs, chicken and sausage with plantain or potatoes.'],
        ['Ragout du Chevre', 'Specials', '15,000 FRW', 'Fried goat meat served with a choice of accompaniment.'],
        ['Spiderman Mix Grill', 'Specials', '60,000 FRW', 'House mix grill platter of beef, chicken, goat, pork and fish.'],
        ['Pork Chop', 'Specials', '10,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Spiderman Meat Lovers', 'Grilled', '40,000 FRW', 'Premium selection of grilled meats, sausages and sides.'],
        ['Grilled Chicken (Modern)', 'Grilled', '20,000 / 11,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Grilled Chicken (Local)', 'Grilled', '18,000 / 10,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Goat Leg', 'Grilled', '18,000 FRW', 'Served with some potato.'],
        ['Goat Ribs', 'Grilled', '15,000 FRW', 'Served with some potato.'],
        ['Whole Tilapia Fish', 'Grilled', '20,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Fish Brochette', 'Brochettes', '4,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Beef Brochette', 'Brochettes', '4,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Chicken Brochette', 'Brochettes', '4,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Zingaro Brochette', 'Brochettes', '3,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Liver Brochette', 'Brochettes', '3,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Goat Brochette', 'Brochettes', '3,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['2 Min Brochette with Chips', 'Brochettes', '5,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Chicken Sizzling', 'Sizzling', '12,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Beef Sizzling', 'Sizzling', '12,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Mix Vegetable Sizzling', 'Sizzling', '8,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Pork Sizzling', 'Sizzling', '12,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Veg Soup', 'Soup', '4,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Chicken Soup', 'Soup', '6,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Chicken Noodle Soup', 'Soup', '6,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Mushroom Cream Soup', 'Soup', '6,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['4 Season Pizza', 'Pizza', '8,000 / 12,000 FRW', 'Mushroom, ham, vegetables and sausage.'],
        ['Chicken Pizza', 'Pizza', '8,000 / 12,000 FRW', 'Chicken and vegetables.'],
        ['Bolognese Pizza', 'Pizza', '8,000 / 10,000 FRW', 'Bolognese sauce, ham and vegetables.'],
        ['Beef Pizza', 'Pizza', '10,000 / 12,000 FRW', 'Beef and vegetables.'],
        ['Meat Lovers Pizza', 'Pizza', '10,000 / 14,000 FRW', 'Beef, chicken, ham, sausage and vegetables.'],
        ['Peperone (Pepperoni) Pizza', 'Pizza', '8,000 / 11,000 FRW', 'Sausages and cheese.'],
        ['Hawaii Pizza', 'Pizza', '8,000 / 12,000 FRW', 'Chicken, pineapple, ham and vegetables.'],
        ['Margarita Pizza', 'Pizza', '8,000 / 10,000 FRW', 'Cheese and vegetables.'],
        ['Mexican Pizza', 'Pizza', '12,000 FRW', 'Tomato sauce, oregano, onion, green pepper, minced beef and green chili.'],
        ['Spiderman Double Burger', 'Burger with Chips', '12,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Beef Burger', 'Burger with Chips', '6,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Chicken Burger', 'Burger with Chips', '8,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Triple Beef Burger', 'Burger with Chips', '15,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Fish Burger', 'Burger with Chips', '8,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Pasta Bolognese', 'Pasta', '6,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Pasta Vegetarian', 'Pasta', '4,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Carbonara Pasta', 'Pasta', '6,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Pomme Napolitano', 'Pasta', '10,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Steak and Pomme', 'Pasta', '12,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Fillet Mignon', 'Beef Dishes', '10,000 FRW', 'Marinated end part of fillet, pan seared with a choice of accompaniment.'],
        ['Beef Mushroom Steak', 'Beef Dishes', '10,000 FRW', 'Marinated beef fillet pan seared with a choice of accompaniment.'],
        ['Pepper Steak', 'Beef Dishes', '10,000 FRW', 'Beef fillet steak cooked in pepper sauce with fresh herbs.'],
        ['Beef Bourguignon', 'Beef Dishes', '10,000 FRW', 'Beef fillet cubes cooked in red sauce with fresh herbs.'],
        ['Chef Signature Salad', 'Cold Starter', '9,000 FRW', 'Lettuce, tomatoes, carrots, cucumber, onions, avocado, chicken and honey mustard dressing.'],
        ['Tuna and Avocado', 'Cold Starter', '10,000 FRW', 'Lettuce, avocado and tuna fried fish with balsamic dressing.'],
        ['Chicken and Mango Salad', 'Cold Starter', '10,000 FRW', 'Chicken and mango on a bed of mixed garden salad.'],
        ['Chicken Wings', 'Meat with Chips', '6,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Chicken Lollipops', 'Meat with Chips', '7,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Chips Liver', 'Meat with Chips', '5,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Meatball with Chips', 'Meat with Chips', '5,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Chicken Leg', 'Meat with Chips', '10,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Chicken butter garlic', 'Meat with Chips', '10,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Chips Banana', 'Side Dishes', '3,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Chips Potato', 'Side Dishes', '3,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Grilled Potato Plate', 'Side Dishes', '2,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Grilled Banana Plate (4 pcs)', 'Side Dishes', '2,000 / 1,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Chicken Dry Fried', 'Side Dishes', '6,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Muzuzu Plate', 'Side Dishes', '4,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Veg. Rice', 'Side Dishes', '4,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Plain Rice', 'Side Dishes', '3,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Kawunga', 'Side Dishes', '2,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Cheese Potatoes', 'Side Dishes', '5,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Fruit Cut', 'Dessert', '6,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Macedoine', 'Dessert', '6,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Ice Cream', 'Dessert', '1,500 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Pop Corn', 'Dessert', '1,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Cotton Candy', 'Dessert', '1,500 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Milkshake', 'Fresh Drinks', '5,500 FRW', 'Vanilla, strawberry or chocolate.'],
        ['Smoothies', 'Fresh Drinks', '6,000 FRW', 'Mango smoothie, banana berry or coffee paste.'],
        ['Fresh Juice', 'Fresh Drinks', '4,000 FRW', 'Pineapple, passion, tomato, carrot and more.'],
        ['Cocktail Juice (Mocktail)', 'Fresh Drinks', '5,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Mango Juice', 'Fresh Drinks', '5,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Frozen Juice', 'Fresh Drinks', '5,000 FRW', 'Mint, lemongrass, ginger, melon or pineapple.'],
        ['Detox Juice', 'Fresh Drinks', '6,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Carrot Juice', 'Fresh Drinks', '4,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Pineapple Mojito', 'Virgin Mojito', '5,000 FRW', 'Lemon juice, mint, pineapple and Sprite.'],
        ['Passion Mojito', 'Virgin Mojito', '5,000 FRW', 'Lemon juice, mint, passion and Sprite.'],
        ['Watermelon Mojito', 'Virgin Mojito', '4,000 FRW', 'Lemon juice, mint, melon and Sprite.'],
        ['Mango Mojito', 'Virgin Mojito', '5,000 FRW', 'Lemon juice, mint, mango and Sprite.'],
        ['Spiderman Mojito', 'Virgin Mojito', '6,000 FRW', 'Signature Spidey blend.'],
        ['Cotton Candy Mojito', 'Virgin Mojito', '4,500 FRW', 'Sweet cotton candy and lemon.'],
        ['African Tea with Sugar', 'Hot/Cold Tea', '3,500 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['African Tea with Honey', 'Hot/Cold Tea', '4,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Spice Tea', 'Hot/Cold Tea', '4,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Hot Chocolate', 'Hot/Cold Tea', '4,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Hot / Cold Milk', 'Hot/Cold Tea', '3,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Ginger Tea', 'Hot/Cold Tea', '3,500 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Lemon Tea', 'Hot/Cold Tea', '3,500 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Black Tea', 'Hot/Cold Tea', '3,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Green Tea', 'Hot/Cold Tea', '3,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Mint Tea', 'Hot/Cold Tea', '3,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Sugarcane Tea', 'Hot/Cold Tea', '3,500 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Russian Tea', 'Hot/Cold Tea', '3,500 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Hibiscus Tea', 'Hot/Cold Tea', '3,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Cloves Tea', 'Hot/Cold Tea', '4,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Cinnamon Tea', 'Hot/Cold Tea', '3,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Espresso Double', 'Coffee (Hot)', '3,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Cappuccino', 'Coffee (Hot)', '3,500 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Cafe Mocha', 'Coffee (Hot)', '4,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Espresso Macchiato', 'Coffee (Hot)', '3,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Latte Macchiato', 'Coffee (Hot)', '3,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Long Black', 'Coffee (Hot)', '3,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Black Coffee', 'Coffee (Hot)', '3,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Americano', 'Coffee (Hot)', '3,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['African Coffee', 'Coffee (Hot)', '3,500 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Espresso Tonic', 'Coffee (Hot)', '4,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Cafe Latte', 'Coffee (Hot)', '3,500 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Frappuccino', 'Cold Coffee', '4,500 FRW', 'Ice, espresso, ice cream or mocha, vanilla and syrup.'],
        ['Iced Coffee Mocha', 'Cold Coffee', '4,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Iced Coffee Cappuccino', 'Cold Coffee', '4,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Iced Coffee Americano', 'Cold Coffee', '3,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Iced Coffee Latte', 'Cold Coffee', '4,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Water (Small)', 'Soft Drinks', '1,500 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Fanta (Small)', 'Soft Drinks', '1,500 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Panache', 'Soft Drinks', '2,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Redbull', 'Soft Drinks', '4,000 FRW', 'Freshly prepared at Spiderman Game Center.'],
        ['Bavaria Non Alc', 'Soft Drinks', '4,000 FRW', 'Freshly prepared at Spiderman Game Center.']
    ].map(([name, category, price, description]) => ({ name, category, price, description }));

    const bakeryItems = [
        ['Celebration Chocolate Cake', 'Celebration Cakes', '25,000 FRW', 'Rich chocolate sponge with smooth ganache, made for memorable birthdays.'],
        ['Vanilla Birthday Cake', 'Celebration Cakes', '22,000 FRW', 'Light vanilla sponge with a creamy finish and colourful sprinkles.'],
        ['Red Velvet Cake', 'Celebration Cakes', '28,000 FRW', 'Soft red velvet layers with a classic cream cheese frosting.'],
        ['Fresh Fruit Cake', 'Celebration Cakes', '30,000 FRW', 'Vanilla cake topped with seasonal fruit and a gentle cream glaze.'],
        ['Chocolate Cupcake', 'Cupcakes', '2,500 FRW', 'Moist chocolate cupcake finished with a swirl of chocolate buttercream.'],
        ['Vanilla Cupcake', 'Cupcakes', '2,000 FRW', 'Soft vanilla sponge with a sweet, playful frosting finish.'],
        ['Red Velvet Cupcake', 'Cupcakes', '2,500 FRW', 'A small red velvet treat with smooth cream cheese frosting.'],
        ['Sprinkle Party Cupcake', 'Cupcakes', '2,500 FRW', 'A bright celebration cupcake made for little hands and big smiles.'],
        ['Butter Croissant', 'Pastries', '2,500 FRW', 'Golden, flaky layers baked fresh for a buttery morning bite.'],
        ['Chocolate Croissant', 'Pastries', '3,000 FRW', 'Flaky pastry wrapped around a warm chocolate centre.'],
        ['Cinnamon Roll', 'Pastries', '3,000 FRW', 'Soft rolled pastry with cinnamon sugar and a light glaze.'],
        ['Blueberry Muffin', 'Pastries', '3,000 FRW', 'Tender muffin packed with blueberry sweetness.'],
        ['Chocolate Chip Cookie', 'Cookies', '1,500 FRW', 'Golden-baked cookie with generous chocolate chips.'],
        ['Oatmeal Raisin Cookie', 'Cookies', '1,500 FRW', 'A chewy oat cookie with juicy raisins and warm spice.'],
        ['Double Chocolate Cookie', 'Cookies', '2,000 FRW', 'Rich cocoa cookie with extra chocolate chunks.'],
        ['Jam Doughnut', 'Doughnuts', '2,000 FRW', 'Soft doughnut filled with bright strawberry jam and dusted with sugar.'],
        ['Chocolate Doughnut', 'Doughnuts', '2,500 FRW', 'Fluffy doughnut with chocolate glaze and a playful topping.'],
        ['Glazed Doughnut', 'Doughnuts', '2,000 FRW', 'Freshly baked doughnut with a smooth sweet glaze.'],
        ['Banana Bread Slice', 'Slices & Loaves', '2,500 FRW', 'Moist banana bread, perfect for a quick snack between games.'],
        ['Carrot Cake Slice', 'Slices & Loaves', '3,000 FRW', 'Spiced carrot cake slice with a creamy topping.'],
        ['Brownie Slice', 'Slices & Loaves', '3,000 FRW', 'Fudgy chocolate brownie with a rich, tender centre.'],
        ['Lemon Loaf Slice', 'Slices & Loaves', '2,500 FRW', 'Bright lemon loaf with a delicate citrus glaze.'],
        ['Fruit Tart', 'Tarts & Treats', '4,000 FRW', 'Crisp pastry filled with cream and finished with fresh fruit.'],
        ['Chocolate Tart', 'Tarts & Treats', '4,000 FRW', 'Silky chocolate filling in a crisp, buttery tart shell.'],
        ['Mini Cheesecake', 'Tarts & Treats', '4,000 FRW', 'Creamy baked cheesecake in a perfectly snackable size.'],
        ['Cake Pop', 'Kids Treats', '2,000 FRW', 'A fun bite-sized cake treat dipped in colourful chocolate.'],
        ['Marshmallow Rice Treat', 'Kids Treats', '1,500 FRW', 'Crispy rice and soft marshmallow in a playful square.'],
        ['Party Treat Box', 'Kids Treats', '12,000 FRW', 'A sharing box of mini cupcakes, cookies and doughnut bites.'],
        ['Hot Chocolate', 'Bakery Drinks', '3,500 FRW', 'Warm chocolate drink topped with a soft, sweet finish.'],
        ['Chai Latte', 'Bakery Drinks', '3,500 FRW', 'Spiced tea latte made for pairing with a fresh pastry.'],
        ['Iced Chocolate', 'Bakery Drinks', '4,000 FRW', 'Cool chocolate drink with a creamy, indulgent finish.'],
        ['Fresh Lemonade', 'Bakery Drinks', '3,000 FRW', 'Bright, refreshing lemonade to balance a sweet treat.']
    ].map(([name, category, price, description]) => ({ name, category, price, description }));

    const imageByCategory = {
        Specials: 'photo-1544025162-d76694265947', Grilled: 'photo-1558030006-450675393462', Brochettes: 'photo-1529193591184-b1d58069ecdd',
        Sizzling: 'photo-1515003197210-e0cd71810b5f', Soup: 'photo-1547592180-85f173990554', Pizza: 'photo-1574071318508-1cdbab80d002',
        'Burger with Chips': 'photo-1568901346375-23c9450c58cd', Pasta: 'photo-1473093295043-cdd812d0e601', 'Beef Dishes': 'photo-1546833999-b9f581a1996d',
        'Cold Starter': 'photo-1540420773420-3366772f4999', 'Meat with Chips': 'photo-1527477396000-e27163b481c2', 'Side Dishes': 'photo-1512621776951-a57141f2eefd',
        Dessert: 'photo-1551024506-0bccd828d307', 'Fresh Drinks': 'photo-1544145945-f90425340c7e', 'Virgin Mojito': 'photo-1551024709-8f23befc6f87',
        'Hot/Cold Tea': 'photo-1544787219-7f47ccb76574', 'Coffee (Hot)': 'photo-1495474472287-4d71bcdd2085', 'Cold Coffee': 'photo-1461023058943-07fcbe16d735',
        'Soft Drinks': 'photo-1523362628745-0c100150b504', 'Celebration Cakes': 'photo-1578985545062-69928b1d9587',
        Cupcakes: 'photo-1519869325930-281384150729', Pastries: 'photo-1555507036-ab1f4038808a', Cookies: 'photo-1499636136210-6f4ee915583e',
        Doughnuts: 'photo-1551024506-0bccd828d307', 'Slices & Loaves': 'photo-1606313564200-e75d5e30476c', 'Tarts & Treats': 'photo-1464305795204-6f5bbfc7fb81',
        'Kids Treats': 'photo-1575377427642-087cf684f04d', 'Bakery Drinks': 'photo-1544145945-f90425340c7e'
    };
    const foodImageVariants = [
        'photo-1546069901-ba9599a7e63c', 'photo-1540189549336-e6e99c3679fe',
        'photo-1513104890138-7c749659a591', 'photo-1568901346375-23c9450c58cd',
        'photo-1498837167922-ddd27525d352', 'photo-1504674900247-0877df9cc836',
        'photo-1551183053-bf91a1d81141', 'photo-1515003197210-e0cd71810b5f'
    ];
    function getImageId(menuItem, index) {
        if (index % 3 === 0) return imageByCategory[menuItem.category] || imageByCategory.Specials;
        return foodImageVariants[index % foodImageVariants.length];
    }
    const catalog = document.querySelector('.bakery-menu') ? bakeryItems : menuItems;
    const categories = ['All', ...new Set(catalog.map(item => item.category))];
    const categoryWrap = document.getElementById('menuCategories');
    const dotsWrap = document.getElementById('carouselDots');
    const nameEl = document.getElementById('menuItemName');
    const categoryEl = document.getElementById('menuItemCategory');
    const descriptionEl = document.getElementById('menuItemDescription');
    const priceEl = document.getElementById('menuItemPrice');
    const countEl = document.getElementById('menuCount');
    const backdrop = document.getElementById('menuBackdrop');
    const trayCountEl = document.getElementById('trayCount');
    const trayTotalEl = document.getElementById('trayTotal');
    const trayItemsEl = document.getElementById('trayItems');
    const trayEl = document.querySelector('.menu-tray');
    const trayToggle = document.getElementById('trayToggle');
    const trayDetails = document.getElementById('trayDetails');
    const stage = document.querySelector('.menu-stage');
    const dots = document.getElementById('carouselDots');
    const toolbar = document.querySelector('.menu-toolbar');
    const viewAllButton = document.createElement('button');
    const allItemsGrid = document.createElement('section');
    viewAllButton.type = 'button';
    viewAllButton.className = 'menu-view-all-button';
    viewAllButton.innerHTML = '<i class="fa-solid fa-table-cells-large"></i> View all items';
    viewAllButton.setAttribute('aria-expanded', 'false');
    viewAllButton.setAttribute('aria-controls', 'allMenuItems');
    toolbar.appendChild(viewAllButton);
    allItemsGrid.id = 'allMenuItems';
    allItemsGrid.className = 'all-menu-items';
    allItemsGrid.hidden = true;
    stage.parentNode.insertBefore(allItemsGrid, stage);
    let filteredItems = catalog;
    let activeIndex = 0;
    let tray = [];
    let autoplay;

    categories.forEach(category => {
        const button = document.createElement('button');
        button.type = 'button'; button.className = 'menu-category-button'; button.textContent = category;
        button.classList.toggle('active', category === 'All');
        button.addEventListener('click', () => {
            if (!allItemsGrid.hidden) toggleAllItems();
            document.querySelectorAll('.menu-category-button').forEach(item => item.classList.remove('active'));
            button.classList.add('active'); filteredItems = category === 'All' ? catalog : catalog.filter(item => item.category === category);
            activeIndex = 0; render(); restartAutoplay();
        });
        categoryWrap.appendChild(button);
    });

    function renderAllItems() {
        allItemsGrid.innerHTML = '';
        catalog.forEach((menuItem, index) => {
            const card = document.createElement('article');
            card.className = 'all-menu-item';
            const imageId = getImageId(menuItem, index);
            card.innerHTML = `<img src="https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=500&q=80" alt="${menuItem.name}" loading="lazy"><div class="all-menu-item-content"><span>${menuItem.category}</span><h3>${menuItem.name}</h3><p>${menuItem.description}</p><strong>${menuItem.price}</strong><button type="button" class="all-menu-add"><i class="fa-solid fa-plus"></i> Add</button></div>`;
            card.querySelector('.all-menu-add').addEventListener('click', () => {
                tray.push(menuItem);
                updateTray();
                if (trayDetails.hidden) {
                    trayDetails.hidden = false;
                    trayToggle.setAttribute('aria-expanded', 'true');
                    trayEl.classList.add('is-open');
                }
            });
            allItemsGrid.appendChild(card);
        });
    }

    function toggleAllItems() {
        const showAll = allItemsGrid.hidden;
        allItemsGrid.hidden = !showAll;
        stage.hidden = showAll;
        dots.hidden = showAll;
        viewAllButton.setAttribute('aria-expanded', String(showAll));
        viewAllButton.innerHTML = showAll ? '<i class="fa-solid fa-arrow-left"></i> Back to carousel' : '<i class="fa-solid fa-table-cells-large"></i> View all items';
        if (showAll) {
            clearInterval(autoplay);
            countEl.textContent = catalog.length;
            renderAllItems();
        } else {
            restartAutoplay();
        }
    }

    viewAllButton.addEventListener('click', toggleAllItems);

    function render() {
        countEl.textContent = filteredItems.length;
        const item = filteredItems[activeIndex];
        const imageId = getImageId(item, activeIndex);
        backdrop.classList.remove('is-changing');
        backdrop.style.backgroundImage = `url("https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=1600&q=85")`;
        requestAnimationFrame(() => backdrop.classList.add('is-changing'));
        if (carousel.dataset.menuKey !== filteredItems.map(menuItem => menuItem.name).join('|')) {
            carousel.innerHTML = '';
            carousel.dataset.menuKey = filteredItems.map(menuItem => menuItem.name).join('|');
            filteredItems.forEach((menuItem, index) => {
                const card = document.createElement('button');
                card.type = 'button'; card.className = 'food-carousel-card'; card.setAttribute('aria-label', `View ${menuItem.name}`);
                const imageId = getImageId(menuItem, index);
                card.innerHTML = `<img src="https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=500&q=80" alt="${menuItem.name}" loading="lazy">`;
                card.addEventListener('click', () => { activeIndex = index; render(); restartAutoplay(); });
                carousel.appendChild(card);
            });
        }
        const caption = document.querySelector('.carousel-caption');
        caption.classList.remove('is-changing');
        requestAnimationFrame(() => caption.classList.add('is-changing'));
        categoryEl.textContent = item.category; nameEl.textContent = item.name; descriptionEl.textContent = item.description; priceEl.textContent = item.price;
        carousel.querySelectorAll('.food-carousel-card').forEach((card, index) => {
            let offset = index - activeIndex;
            if (offset > filteredItems.length / 2) offset -= filteredItems.length;
            if (offset < -filteredItems.length / 2) offset += filteredItems.length;
            const distance = Math.abs(offset);
            const scale = offset === 0 ? 1 : distance === 1 ? 0.82 : distance === 2 ? 0.68 : 0.58;
            card.style.setProperty('--offset', offset);
            card.style.transform = `translateX(calc(-50% + ${offset * 116}px)) scale(${scale})`;
            card.style.zIndex = String(10 - distance);
            card.classList.toggle('is-active', offset === 0);
            card.classList.toggle('is-near', distance === 1);
            card.classList.toggle('is-far', distance > 1 && distance <= 3);
            card.classList.toggle('is-hidden', distance > 3);
            card.setAttribute('aria-hidden', String(distance > 3));
        });
        dotsWrap.innerHTML = '';
        if (filteredItems.length <= 20) filteredItems.forEach((menuItem, index) => {
            const dot = document.createElement('button'); dot.type = 'button'; dot.className = `carousel-dot${index === activeIndex ? ' active' : ''}`; dot.setAttribute('aria-label', `Show ${menuItem.name}`);
            dot.addEventListener('click', () => { activeIndex = index; render(); restartAutoplay(); }); dotsWrap.appendChild(dot);
        });
    }

    function move(step) { activeIndex = (activeIndex + step + filteredItems.length) % filteredItems.length; render(); }
    function restartAutoplay() { clearInterval(autoplay); autoplay = setInterval(() => move(1), 3500); }
    document.querySelector('.carousel-prev').addEventListener('click', () => { move(-1); restartAutoplay(); });
    document.querySelector('.carousel-next').addEventListener('click', () => { move(1); restartAutoplay(); });
    function updateTray() {
        const total = tray.reduce((sum, item) => sum + Number(item.price.split('/')[0].replace(/[^0-9]/g, '')), 0);
        trayCountEl.textContent = `${tray.length} ${tray.length === 1 ? 'item' : 'items'}`;
        trayTotalEl.textContent = `${total.toLocaleString()} FRW`;
        trayItemsEl.innerHTML = '';
        if (!tray.length) {
            trayItemsEl.innerHTML = '<p class="tray-empty">Your tray is empty.</p>';
            return;
        }
        tray.forEach((item, index) => {
            const row = document.createElement('div');
            row.className = 'tray-item';
            row.innerHTML = `<span>${item.name}</span><strong>${item.price.split('/')[0].trim()} <button class="tray-remove" type="button" aria-label="Remove ${item.name}"><i class="fa-solid fa-xmark"></i></button></strong>`;
            row.querySelector('.tray-remove').addEventListener('click', () => { tray.splice(index, 1); updateTray(); });
            trayItemsEl.appendChild(row);
        });
    }

    document.getElementById('menuAddButton').addEventListener('click', () => {
        tray.push(filteredItems[activeIndex]);
        updateTray();
        if (trayDetails.hidden) {
            trayDetails.hidden = false;
            trayToggle.setAttribute('aria-expanded', 'true');
            trayEl.classList.add('is-open');
        }
    });
    trayToggle.addEventListener('click', () => {
        trayDetails.hidden = !trayDetails.hidden;
        trayToggle.setAttribute('aria-expanded', String(!trayDetails.hidden));
        trayEl.classList.toggle('is-open', !trayDetails.hidden);
    });
    document.getElementById('trayClear').addEventListener('click', () => { tray = []; updateTray(); });
    carousel.addEventListener('keydown', event => {
        if (event.key === 'ArrowLeft') { move(-1); restartAutoplay(); }
        if (event.key === 'ArrowRight') { move(1); restartAutoplay(); }
        if (event.key === 'Enter' || event.key === ' ') { document.getElementById('menuAddButton').click(); event.preventDefault(); }
    });
    stage.addEventListener('mouseenter', () => clearInterval(autoplay)); stage.addEventListener('mouseleave', restartAutoplay);
    stage.addEventListener('focusin', () => clearInterval(autoplay)); stage.addEventListener('focusout', restartAutoplay);
    render(); restartAutoplay();
});