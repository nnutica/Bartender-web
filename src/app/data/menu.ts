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
        name: "Once Joyful",
        description: "A refreshing cocktail with Napa Melon Brandy, Valencia Orange Juice, and Vanilla Syrup, topped with a splash of soda water.",
        price: 390,
        image: "menu/menu01.jpg",
        category: "cocktail",
        recipe: {
            ingredients: [
                { name: "Soda Water", amount: "Top up" },
                { name: "Brandy Napa", amount: "15 ml" },
                { name: "Valencia Orange Juice", amount: "30 ml" },
                { name: "Lime Juice", amount: "15 ml" },
                { name: "Vanilla Syrup", amount: "10 ml" },
                { name: "Egg White", amount: "10 ml" },
                { name: "Soda", amount: "20 ml (Top with Soda)" }
],
instructions: [
    "Dry shake for 15 seconds.",
    "Add ice and shake again for another 15 seconds.",
    "Strain into a coupe glass.",
    "Finish by garnishing with Dark Opal."
],
            glassType: "Coupe Glass"
        }
    },
    
];