import { FoodTitle } from './food_title';

export const appetizers: FoodTitle = {
    title: "APPETIZER",
    overview: "",
    FoodDetail: [
        {
            id: 1,
            name: "Fresh Spring Roll (2pcs)",
            description: "Rice paper rolls filled with noodles, lettuce, and your choice of protein. Served with peanut dipping sauce.",
            price: "$4.99",
            choice: "Shrimp & Pork | Specialty Pork Sausage | Tofu",
            addon: "",
            image: "assets/Appetizer/pork_sausage_spring_roll.jpg"
        },
        {
            id: 2,
            name: "Fried Egg Rolls (2pcs)",
            description: "Golden, crispy rolls filled with taro, carrots, glass noodles, and your choice of protein, wrapped in egg roll wrappers and fried to perfection. Served with sweet & sour sauce.",
            price: "$5.50",
            choice: "Pork | Tofu",
            addon: "",
            image: "assets/Appetizer/fried_egg_roll.jpg"
        },
        {
            id: 3,
            name: "Crab Cream Cheese Wonton (4pcs)",
            description: "Crispy golden wontons filled with creamy cheese and finely shredded crab stick, and cilantro. Served with sweet & sour sauce.",
            price: "$7.99",
            choice: "",
            addon: "",
            image: "assets/Appetizer/cream_cheese.png"
        },
        {
            id: 4,
            name: "Fried Chicken Gyoza (6pcs)",
            description: "Delicate Japanese-style dumplings filled with chicken, cabbage, and scallions, deep-fried to golden perfection. Served with sweet & sour sauce.",
            price: "$8.50",
            choice: "",
            addon: "",
            image: "assets/Appetizer/gyoza.png"
        },
        {
            id: 5,
            name: "Chicken Wings (6pcs)",
            description: "Crispy fried chicken wings coated in a garlic sauce.",
            price: "$11.99",
            choice: "",
            addon: "",
            image: "assets/Appetizer/chicken_wings.png"
        }
    ]
};
export const phoMenu: FoodTitle = {
    title: "PHỞ - SOUP NOODLES",
    overview: "A fragrant Vietnamese rice noodle soup simmered for hours with beef bones, onions, and aromatic spices (star anise, cinnamon, and ginger). Served with fresh herbs, bean sprouts, lime, and jalapeño on the side.",
    FoodDetail: [
        {
            id: 1,
            name: "*Beef Phở",
            description: "Select up to 3 cuts of your choice: *Steak, Brisket, Meatball, Tendon, Tripe.",
            image: "assets/Pho/beef_pho.png",  // Assume you have an image file for this
            price: "$14.50 (Small) / $15.50 (Large)",
            choice: "",
            addon: ""
        },
        {
            id: 2,
            name: "*Combination Phở",
            description: "A special combination of *steak, brisket, meatballs, tendon, and tripe.",
            image: "assets/Pho/combination_pho.png",
            price: "$15.50 (Small) / $16.50 (Large)",
            choice: "",
            addon: ""
        },
        {
            id: 3,
            name: "Phở Tái Lăn",
            description: "Lightly seared beef with garlic and onions served in rich beef broth over rice noodles (Hanoi-style pho).",
            image: "assets/Pho/pho_tai_lan.png",
            price: "$14.50 (Small) / $15.50 (Large)",
            choice: "",
            addon: ""
        },
        {
            id: 4,
            name: "Chicken Phở",
            description: "Aromatic chicken broth with shredded chicken, rice noodles, and fresh herbs.",
            image: "assets/Pho/Chicken_Pho.jpg",
            price: "$14.50 (Small) / $15.50 (Large)",
            choice: "",
            addon: ""
        },
        {
            id: 5,
            name: "Tofu Veggie Phở",
            description: "A delicate vegetable broth with rice noodles, crispy tofu, and fresh vegetables (broccoli, bok choy, carrots, cabbage).",
            image: "assets/Pho/Tofu_Pho.jpg",
            price: "$14.50 (Small) / $15.50 (Large)",
            choice: "",
            addon: ""
        },
        {
            id: 6,
            name: "Seafood Phở",
            description: "A fragrant, ocean-inspired twist on classic pho - fresh rice noodles in a delicate chicken broth, topped with shrimp, squid, crab sticks, and fish balls.",
            image: "seafood-pho.jpg",
            price: "$15.50 (Small) / $16.50 (Large)",
            choice: "",
            addon: ""
        }
    ]
};
export const vermicelliMenu: FoodTitle = {
    title: "VERMICELLI NOODLES",
    overview: "Bowls are served with vermicelli noodles, lettuce, bean sprouts, cucumbers, pickles, fresh herbs, peanut, crispy shallot, roasted peanut, and your choice of grilled meat. Served with house-made fish sauce.",
    FoodDetail: [
        {
            id: 1,
            name: "Grilled Pork",
            description: "Pork, fried pork egg roll.",
            image: "assets/Vermicelli_Noodles/grilled pork vermicelli noodle.png",
            price: "$15.50",
            choice: "",
            addon: ""
        },
        {
            id: 2,
            name: "Grilled Specialty Pork Sausage",
            description: "Specialty pork sausage, fried pork egg roll.",
            image: "assets/Vermicelli_Noodles/Gilled pork sausage vermicelli noodles.png",
            price: "$15.50",
            choice: "",
            addon: ""
        },
        {
            id: 3,
            name: "Grilled Chicken",
            description: "Chicken thigh, fried pork egg roll.",
            image: "assets/Vermicelli_Noodles/Vermicelli_Grilled Chicken.jpg",
            price: "$15.50",
            choice: "",
            addon: ""
        },
        {
            id: 4,
            name: "Grilled Prawn",
            description: "White prawn, a fried pork egg roll.",
            image: "assets/Vermicelli_Noodles/Grilled prawn vermicelli noodle.png",
            price: "$15.50",
            choice: "",
            addon: ""
        }
    ]
};
export const yakisobaMenu: FoodTitle = {
    title: "YAKISOBA NOODLES",
    overview: "Stir-fried yakisoba noodles tossed with fresh vegetables (cabbage, broccoli, and carrots) and your choice of protein in a savory-sweet Japanese-style sauce.",
    FoodDetail: [
        {
            id: 1,
            name: "Yakisoba Noodles",
            description: "",
            image: "assets/Yakisoba/shrimp yakisoba.png",
            price: "$15.50",
            choice: "Chicken | Beef | Shrimp | Tofu",
            addon: ""
        }
    ]
};
export const ricePlateMenu: FoodTitle = {
    title: "RICE PLATE & BÁNH MÌ",
    overview: "A variety of delicious rice plates served with your choice of protein, vegetables, and house-made sauces.",
    FoodDetail: [
        {
            id: 1,
            name: "Fried Rice",
            description: "Golden, fluffy rice stir-fried with your choice of protein, eggs, vegetables (carrots and peas), and finished with a touch of scallion and soy-based seasoning.",
            image: "assets/Rice_plate_banh_mi/Shrimp Fried Rice.png",  // Example image path
            price: "$15.50",
            choice: "Chicken, Shrimp, Tofu | Combo (Chicken & Shrimp: +$1.00)",
            addon: ""
        },
        {
            id: 2,
            name: "Chicken Teriyaki",
            description: "Juicy grilled chicken glazed with our teriyaki sauce, served with steamed vegetables, salad dressing, and jasmine rice.",
            image: "assets/Rice_plate_banh_mi/chicken teriyaki.png",
            price: "$14.50",
            choice: "",
            addon: ""
        },
        {
            id: 3,
            name: "Grilled Pork Chop",
            description: "Juicy, marinated pork chop grilled to perfection, served over steamed jasmine rice with fresh vegetables (lettuce & cucumbers), pickled carrots and a fried egg. Served with house-made fish sauce.",
            image: "assets/Rice_plate_banh_mi/grilled pork chop.jpg",
            price: "$15.99",
            choice: "",
            addon: ""
        },
        {
            id: 4,
            name: "Grilled Lemongrass Chicken",
            description: "Juicy chicken marinated in fragrant lemongrass, garlic, and a touch of honey, grilled to perfection and served over steamed jasmine rice with fresh vegetables, pickled carrots and daikon. Served with house-made fish sauce.",
            image: "assets/Rice_plate_banh_mi/grilled lemon grass chicken.png",
            price: "$15.50",
            choice: "",
            addon: ""
        },
        {
            id: 5,
            name: "Stir-Fried Veggies",
            description: "A colorful medley of seasonal vegetables wok-tossed with onions and our signature house sauce. Served with steamed jasmine rice.",
            image: "assets/Rice_plate_banh_mi/stir-fried veggies.png",
            price: "$15.50",
            choice: "Chicken | Beef | Shrimp | Tofu | Vegetables",
            addon: ""
        },
        {
            id: 6,
            name: "Bánh Mì",
            description: "Crispy baguettes filled with bold Vietnamese flavors, pickled carrots and daikon, cucumber, cilantro, jalapeño, crispy onions, and our signature house mayo and pate.",
            image: "assets/Rice_plate_banh_mi/banh_mi.png",
            price: "$8.99",
            choice: "Grilled Pork | Grilled Chicken | Ham | Tofu",
            addon: ""
        }
    ]
};

export const wifeFavoriteMenu: FoodTitle = {
    title: "MY WIFE'S FAVORITE",
    overview: "A collection of my wife's favorite dishes, packed with flavor and heartwarming goodness.",
    FoodDetail: [
        {
            id: 1,
            name: "Golden Chicken Rice",
            description: "Fragrant turmeric rice served with tender shredded chicken, fresh herbs, mint, and onions. Served with our ginger house-made fish sauce and a bowl of chicken broth.",
            image: "assets/My_wife_favorite/Golden_chicken_rice.jpg",
            price: "$17.99",
            choice: "",
            addon: ""
        },
        {
            id: 2,
            name: "Phở Gà Trộn",
            description: "Fresh pho noodles with tender marinated chicken, fragrant herbs, pickled vegetables, and roasted peanuts. Served with our light garlic–lime fish sauce dressing.",
            image: "assets/My_wife_favorite/pho_ga_tron.jpg",
            price: "$16.99",
            choice: "",
            addon: ""
        },
        {
            id: 3,
            name: "Vietnamese Beef Stew (Bò Kho)",
            description: "Tender beef slow-simmered with lemongrass, star anise, and aromatic spices in a rich, flavorful broth.",
            image: "assets/My_wife_favorite/beef_stew.png",
            price: "$16.50",
            choice: "Served with: Pho noodles | Ramen noodles | Baguette | Rice",
            addon: ""
        },
        {
            id: 4,
            name: "Spicy Beef Noodle Soup (Bún Bò Huế)",
            description: "A bold and flavorful central Vietnamese soup made with lemongrass-infused beef broth, thick rice noodles, tender beef slices, sliced ham, and pork meatball.",
            image: "assets/My_wife_favorite/spicy_beef_noodle_soup.png",
            price: "$16.50",
            choice: "",
            addon: ""
        },
        {
            id: 5,
            name: "Beef Stir-Fry Vermicelli Noodles",
            description: "Tender slices of beef stir-fried with garlic and onions, served over fresh vermicelli noodles with lettuce, cucumbers, herbs, and roasted peanuts. Served with house-made fish sauce.",
            image: "assets/My_wife_favorite/beef_stir-fry.png",
            price: "$15.50",
            choice: "",
            addon: ""
        }
    ]
};
export const kidsMealMenu: FoodTitle = {
    title: "KID'S MEAL",
    overview: "For kids under 10 years old, no substitutions.",
    FoodDetail: [
        {
            id: 1,
            name: "Chicken or Brisket Phở",
            description: "",
            image: "chicken-brisket-pho.jpg",
            price: "$7.99",
            choice: "",
            addon: ""
        },
        {
            id: 2,
            name: "Chicken Teriyaki",
            description: "",
            image: "chicken-teriyaki.jpg",
            price: "$7.99",
            choice: "",
            addon: ""
        },
        {
            id: 3,
            name: "Popcorn Chicken",
            description: "",
            image: "assets/Kid_meal/popcorn_chicken.png",
            price: "$7.99",
            choice: "",
            addon: ""
        }
    ]
};
export const drinksMenu: FoodTitle = {
    title: "DRINKS",
    overview: "Refreshing drinks to complement your meal.",
    FoodDetail: [
        {
            id: 1,
            name: "Vietnamese Coffee",
            description: "",
            image: "vietnamese-coffee.jpg",
            price: "$5.50",
            choice: "",
            addon: ""
        },
        {
            id: 2,
            name: "Soda",
            description: "",
            image: "soda.jpg",
            price: "$2.50",
            choice: "Coke | Diet Coke | Sprite",
            addon: ""
        },
        {
            id: 3,
            name: "Hot Tea",
            description: "",
            image: "hot-tea.jpg",
            price: "$2.50",
            choice: "Green Tea | Lemon Ginger Tea (Caffeine-free)",
            addon: ""
        }
    ]
};