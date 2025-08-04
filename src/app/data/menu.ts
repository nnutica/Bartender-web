export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: 'cocktail' | 'mocktail' ;
    ingredients?: string[];
    recipe?: {
        ingredients: { name: string; amount: string }[];
        instructions: string[];
        glassType: string;
    };
}export const menuItems: MenuItem[] = [
    {
        id: 1,
        name: "Thai Mojito",
        description: "A refreshing cocktail with Thai white spirit, fresh lime, and mint.",
        price: 12.99,
        image: "menu/menu01.jpg",
        category: "cocktail",
        recipe: {
            ingredients: [
                { name: "Thai White Spirit", amount: "60ml" },
                { name: "Fresh Lime Juice", amount: "20ml" },
                { name: "Simple Syrup", amount: "15ml" },
                { name: "Fresh Mint Leaves", amount: "8-10 leaves" },
                { name: "Kaffir Lime Leaves", amount: "2 leaves" },
                { name: "Lemongrass", amount: "1 stalk" },
                { name: "Soda Water", amount: "Top up" }
            ],
            instructions: [
                "Muddle mint leaves and kaffir lime leaves gently in the glass",
                "Add Thai white spirit, lime juice, and simple syrup",
                "Fill with ice and stir well",
                "Top up with soda water",
                "Garnish with fresh mint sprig and lime wheel"
            ],
            glassType: "Highball Glass"
        }
    },
    {
        id: 2,
        name: "Virgin Pina Colada",
        description: "A tropical blend of coconut cream and pineapple juice.",
        price: 8.99,
        image: "menu/menu02.jpg",
        category: "mocktail",
        recipe: {
            ingredients: [
                { name: "Coconut Cream", amount: "60ml" },
                { name: "Pineapple Juice", amount: "120ml" },
                { name: "Crushed Ice", amount: "1 cup" },
                { name: "Pineapple Wedge", amount: "For garnish" },
                { name: "Maraschino Cherry", amount: "For garnish" }
            ],
            instructions: [
                "Add coconut cream and pineapple juice to blender",
                "Add crushed ice and blend until smooth",
                "Pour into chilled glass",
                "Garnish with pineapple wedge and cherry"
            ],
            glassType: "Hurricane Glass"
        }
    },
    {
        id: 3,
        name: " Spicy Papaya Salad",
        description: "A spicy Papaya salad with a Gin Gordon.",
        price: 10.99,
        image: "menu/menu03.jpg",
        category: "cocktail",
        recipe: {
            ingredients: [
                { name: "Gin Gordon", amount: "50ml" },
                { name: "Papaya Juice", amount: "100ml" },
                { name: "Lime Juice", amount: "15ml" },
                { name: "Thai Chili Syrup", amount: "10ml" },
                { name: "Fish Sauce", amount: "2 drops" },
                { name: "Thai Basil", amount: "For garnish" }
            ],
            instructions: [
                "Shake gin, papaya juice, lime juice, and chili syrup with ice",
                "Double strain into chilled glass",
                "Add 2 drops of fish sauce",
                "Garnish with Thai basil leaves"
            ],
            glassType: "Coupe Glass"
        }
    }
];