<template>
    <div>
        <header>
            <div class="container">
                <h1>Car Rental Service</h1>
                <nav>
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/about">About</router-link></li>
                        <li><router-link to="/services">Services</router-link></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                    </ul>
                </nav>
            </div>
        </header>

        <section class="hero">
            <div class="container">
                <h2>Find Your Perfect Ride</h2>
                <form class="search-form">
                    <input type="text" placeholder="Enter a location">
                    <input type="date" placeholder="Pick-up Date">
                    <input type="date" placeholder="Drop-off Date">
                    <button type="submit">Search</button>
                </form>
            </div>
        </section>

        <section class="cars">
            <div class="container">
                <h2>Available Cars</h2>
                <div class="car-card" v-for="car in cars" :key="car.id">
                    <img :src="car.image" :alt="car.model">
                    <h3>{{ car.model }}</h3>
                    <p>\${{ car.price }}/day</p>
                    <button>Rent Now</button>
                </div>
            </div>
        </section>

        <section class="locations">
            <div class="container">
                <h2>Our Locations</h2>
                <div class="location">
                    <img :src="require('@/assets/location1.jpg')" alt="Brisbane">
                    <h3>Brisbane</h3>
                    <p>123 Main St, Brisbane, QLD 4000</p>
                </div>
                <div class="location">
                    <img :src="require('@/assets/location2.jpg')" alt="Townsville">
                    <h3>Townsville</h3>
                    <p>456 Another St, Townsville, QLD 4810</p>
                </div>
            </div>
        </section>

        <footer>
            <div class="container">
                <p>&copy; 2024 Car Rental Service. All rights reserved.</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Landing',
    data() {
        return {
            cars: [
                { id: 1, model: 'Car Model 1', price: 50, image: require('@/assets/car1.jpg') },
                { id: 2, model: 'Car Model 2', price: 60, image: require('@/assets/car2.jpg') },
                // Add more cars as needed
            ]
        };
    }
}
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
}

.container {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
}

header {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
}

header h1 {
    margin: 0;
    text-align: center;
}

header nav ul {
    list-style: none;
    padding: 0;
    text-align: center;
}

header nav ul li {
    display: inline;
    margin: 0 10px;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
}

.hero {
    background: url('@/assets/hero-bg.jpg') no-repeat center center/cover;
    color: #fff;
    text-align: center;
    padding: 100px 0;
}

.hero h2 {
    margin: 0;
    font-size: 2.5em;
}

.search-form {
    margin-top: 20px;
}

.search-form input, .search-form button {
    padding: 10px;
    margin: 5px;
    border: none;
    border-radius: 5px;
}

.search-form input {
    width: 200px;
}

.search-form button {
    background-color: #333;
    color: #fff;
}

.cars {
    background-color: #fff;
    padding: 40px 0;
}

.cars h2 {
    text-align: center;
    margin-bottom: 40px;
}

.car-card {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    padding: 20px;
    text-align: center;
    margin-bottom: 20px;
}

.car-card img {
    max-width: 100%;
    height: auto;
}

.car-card h3 {
    margin: 10px 0;
}

.car-card button {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.locations {
    background-color: #fff;
    padding: 40px 0;
    text-align: center;
}

.locations h2 {
    margin-bottom: 40px;
}

.locations .location {
    display: inline-block;
    width: 45%;
    margin: 0 2.5%;
}

.locations .location img {
    max-width: 100%;
    height: auto;
}

.locations .location h3 {
    margin: 10px 0;
    font-size: 1.5em;
    color: #333;
}

.locations .location p {
    margin-top: 5px;
    font-size: 1.2em;
    color: #666;
}

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>
