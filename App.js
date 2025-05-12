import React from "react";
import ReactDOM from "react-dom/client";

/* 
Header
    - Logo
    - List Items(NavItems)
    - Cart
Body
    - Search Bar
    - Restaurant List
        - Restaurant Card
            - Image
            - Name
            - Rating
            - Cuisines
Footer 
    - Links
    - Copyright
*/
const Title = () => (
    <a href="/">
        <img
            className="logo" 
            src="https://shorturl.at/MtILH" 
            alt="Logo" 

        />
    </a>
);

//Composing Components
const HeaderComponent = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const restaurantList = [
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "879041",
                    "name": "Grains N Greens",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/3/f7c7bb01-6edb-4879-b60d-2e3ecb4ee80f_879041.jpg",
                    "locality": "Sector 45",
                    "areaName": "Golf Course",
                    "costForTwo": "₹600 for two",
                    "cuisines": [
                        "Healthy Food"
                    ],
                    "avgRating": 4.6,
                    "parentId": "391102",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "328",
                    "promoted": true,
                    "adTrackingId": "cid=28959827~p=13~adgrpid=28959827#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=879041~plpr=COLLECTION~eid=81f2c3ae-7f9a-4975-a1ee-66771cea89b4~srvts=1746962227809~collid=83637",
                    "sla": {
                        "deliveryTime": 51,
                        "lastMileTravel": 9.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-55 mins",
                        "lastMileTravelString": "9.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-11 23:00:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "brand",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "shortDescription": "brand",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x"
                                        }
                                    }
                                ]
                            },
                            "textBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹50 OFF",
                        "subHeader": "ABOVE ₹499",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "28959827"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=879041&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "774147",
                    "name": "The Chocolate Room",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/26/3135ca13-bd3d-407f-8fdc-8e47a6884d5e_fbdec7d5-8509-449e-aaf8-025263f4ee88.jpeg",
                    "locality": "Sector 142",
                    "areaName": "Sector 142",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Beverages",
                        "Desserts",
                        "Ice Cream",
                        "Fast Food",
                        "Snacks"
                    ],
                    "avgRating": 3.8,
                    "veg": true,
                    "parentId": "1002",
                    "avgRatingString": "3.8",
                    "totalRatingsString": "116",
                    "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-11 23:59:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.6",
                            "ratingCount": "839"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=774147&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "650248",
                    "name": "House Of Migo",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/2/4/0a5ab181-9fb3-412b-a6af-dc2f76cb9c74_3fe2f6c5-beb9-435b-b77d-1ebf027156de.jpg",
                    "locality": "Victory Road",
                    "areaName": "Sector 135",
                    "costForTwo": "₹800 for two",
                    "cuisines": [
                        "Italian",
                        "pizza",
                        "Burger",
                        "Coffee",
                        "Beverages",
                        "Desserts",
                        "Cafe"
                    ],
                    "avgRating": 4.3,
                    "parentId": "391418",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "383",
                    "promoted": true,
                    "adTrackingId": "cid=28489800~p=16~adgrpid=28489800#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=650248~plpr=COLLECTION~eid=e93c7f28-ef98-4284-81d5-f4fbd59f5e11~srvts=1746962227809~collid=83637",
                    "sla": {
                        "deliveryTime": 43,
                        "lastMileTravel": 4.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "4.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-11 23:30:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "newg.png",
                                            "description": "Gourmet"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹75",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "28489800"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=650248&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "884205",
                    "name": "Wow! Chicken By Wow! Momo",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/21/0afddda3-b5df-4ab6-a4b8-901bcd37202f_bded6a3a-e583-4c31-87b9-17e2f27f5b4a.png",
                    "locality": "Sector 142",
                    "areaName": "Advant",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Burger",
                        "American",
                        "fastfood"
                    ],
                    "avgRating": 4,
                    "parentId": "268366",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "102",
                    "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-12 01:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹19"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=884205&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "933921",
                    "name": "Food Mohalla",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/28/cd6fa455-a2de-4a78-8c36-b9df0e7bf21d_92e217d2-a4bc-4db7-a646-07a14d6c63c4.jpg",
                    "locality": "SECTOR-135",
                    "areaName": "GautamBudh Nagar ",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Fast Food",
                        "Cafe"
                    ],
                    "avgRating": 4,
                    "veg": true,
                    "parentId": "81653",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "42",
                    "promoted": true,
                    "adTrackingId": "cid=28907413~p=18~adgrpid=28907413#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=933921~plpr=COLLECTION~eid=8a2ba394-2fa9-44fa-8323-f7713b3d1427~srvts=1746962227809~collid=83637",
                    "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-11 22:45:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "28907413"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=933921&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "421521",
                    "name": "Indiana Burgers",
                    "cloudinaryImageId": "rtrc8wcepbfj9obbrger",
                    "locality": "Shahdra Road",
                    "areaName": "Shahdara",
                    "costForTwo": "₹150 for two",
                    "cuisines": [
                        "Burgers",
                        "American",
                        "Fast Food",
                        "Beverages",
                        "Desserts"
                    ],
                    "avgRating": 4.2,
                    "parentId": "5714",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "594",
                    "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 4.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-12 03:00:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "description": "",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "66% OFF",
                        "subHeader": "UPTO ₹126"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=421521&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "983378",
                    "name": "KOKOY - Artisanal Kitchen",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/2/20c9200b-8ac3-4a45-8d4b-d5d278b5c37d_fe5824bd-72e9-4a94-82a7-08233483b598.jpg",
                    "locality": "Sector 144",
                    "areaName": "Sector 144",
                    "costForTwo": "₹800 for two",
                    "cuisines": [
                        "Italian",
                        "Continental",
                        "Pizza",
                        "Pasta",
                        "Coffee",
                        "Burger",
                        "Salads",
                        "Beverages",
                        "Desserts"
                    ],
                    "avgRating": 5,
                    "parentId": "574921",
                    "avgRatingString": "5.0",
                    "totalRatingsString": "14",
                    "promoted": true,
                    "adTrackingId": "cid=28706538~p=19~adgrpid=28706538#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=983378~plpr=COLLECTION~eid=9ea119dc-ca3e-4ebe-b8f7-b19139703a8f~srvts=1746962227809~collid=83637",
                    "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 4.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-11 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹169"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.5",
                            "ratingCount": "427"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "28706538"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=983378&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "326242",
                    "name": "Burger House",
                    "cloudinaryImageId": "frf93wgnl9wrxsenedb6",
                    "locality": "Sector 135",
                    "areaName": "Sector 135",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Burgers",
                        "Snacks",
                        "Pizzas"
                    ],
                    "avgRating": 4.1,
                    "parentId": "4475",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "412",
                    "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 4.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "4.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-11 23:59:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "shortDescription": "options available",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "description": ""
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99",
                        "logoCtx": {
                            "text": "BENEFITS"
                        },
                        "footerText": "10 DEALS LEFT",
                        "secondaryHeaderType": "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.4",
                            "ratingCount": "21"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=326242&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "870277",
                    "name": "SACO",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/15/10311570-b6b3-4098-bcbe-b97ddad5fbd8_54fe85a6-00b7-439c-ac94-5e2b458e1189.jpg",
                    "locality": "Amrapali Sapphire Arcade-II",
                    "areaName": "Golf Course",
                    "costForTwo": "₹199 for two",
                    "cuisines": [
                        "sandwich",
                        "Street Food",
                        "Waffle",
                        "Burger",
                        "Snacks",
                        "Desserts",
                        "Beverages"
                    ],
                    "avgRating": 4.5,
                    "veg": true,
                    "parentId": "510132",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "77",
                    "promoted": true,
                    "adTrackingId": "cid=28871859~p=22~adgrpid=28871859#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=870277~plpr=COLLECTION~eid=f9bf3c90-e20b-4298-9dc3-5421f143724b~srvts=1746962227809~collid=83637",
                    "sla": {
                        "deliveryTime": 46,
                        "lastMileTravel": 9.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "9.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-11 23:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                                            "description": "pureveg"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹189",
                        "logoCtx": {
                            "text": "BENEFITS"
                        },
                        "footerText": "10 DEALS LEFT",
                        "secondaryHeaderType": "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "28871859"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=870277&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "421542",
                    "name": "Kouzina Kafe - The Food Court",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/11/5bf1f881-e434-42dc-92be-629824519cb6_062f1a92-2d88-4384-b78f-d0c61126e112.jpg_compressed",
                    "locality": "Shahdra Road",
                    "areaName": "Shahdara",
                    "costForTwo": "₹150 for two",
                    "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Ice Cream",
                        "Beverages",
                        "Cakes",
                        "Cafe"
                    ],
                    "avgRating": 4.6,
                    "parentId": "249027",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "41",
                    "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 4.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "4.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-12 03:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "66% OFF",
                        "subHeader": "UPTO ₹126"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=421542&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "984921",
                    "name": "Krazy Kebab Co.-Fried Chicken, Burgers & Meals",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/26/f4cb91f1-8750-4a24-bca6-9523e9b931a9_eabff299-86d4-4772-bc1f-54f5b12c3f24.jpg",
                    "locality": "Gautam Budh Nagar",
                    "areaName": "Sector 50",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "North Indian",
                        "Fast Food"
                    ],
                    "avgRating": 4.2,
                    "parentId": "618855",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "125",
                    "promoted": true,
                    "adTrackingId": "cid=28730688~p=26~adgrpid=28730688#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=984921~plpr=COLLECTION~eid=27bdc696-8e42-4642-a691-034343e2e00c~srvts=1746962227809~collid=83637",
                    "sla": {
                        "deliveryTime": 62,
                        "lastMileTravel": 13.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "60-65 mins",
                        "lastMileTravelString": "13.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-12 00:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "isNewlyOnboarded": true,
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "28730688"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=984921&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "857598",
                    "name": "Sunnyvale Super Burgers",
                    "cloudinaryImageId": "5e5944dd150be6905c0edba2d71cef12",
                    "locality": "Sector 141",
                    "areaName": "Noida Expressway",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Burgers",
                        "Cafe"
                    ],
                    "avgRating": 4.3,
                    "parentId": "504021",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "79",
                    "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 4.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-12 03:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textExtendedBadges": {},
                            "textBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=857598&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "111666",
                    "name": "Burgrill - The Win Win Burger",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/16/013bf01b-3761-46b2-be92-ebe79992ff9a_0cd20cb2-3467-4a10-8532-8b2cc748c70c.png_compressed",
                    "locality": "Sector 45",
                    "areaName": "Sector 45",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "Burgers",
                        "Healthy Food",
                        "American",
                        "Salads",
                        "Beverages",
                        "Desserts",
                        "Snacks"
                    ],
                    "avgRating": 4.4,
                    "parentId": "302366",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "5.8K+",
                    "promoted": true,
                    "adTrackingId": "cid=28717618~p=27~adgrpid=28717618#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=111666~plpr=COLLECTION~eid=79e74443-3eb3-4603-942e-854b90327371~srvts=1746962227810~collid=83637",
                    "sla": {
                        "deliveryTime": 45,
                        "lastMileTravel": 10.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "10.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-12 04:00:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "description": "",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "imageBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.4",
                            "ratingCount": "91"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "28717618"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=111666&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "720606",
                    "name": "MovieMax",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/3/aa45d5c3-4eb0-42fe-bffe-c8adbf81bccd_9593e222-e74f-4cff-981f-d25da15cca68.jpg",
                    "locality": "Gautam Buddha Nagar",
                    "areaName": "Noida Expressway",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Snacks",
                        "Burgers",
                        "Beverages",
                        "Fast Food"
                    ],
                    "avgRating": 4.6,
                    "parentId": "361478",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "35",
                    "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-11 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textExtendedBadges": {},
                            "textBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.5",
                            "ratingCount": "2.1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=720606&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "788618",
                    "name": "Seoul Fried Chicken",
                    "cloudinaryImageId": "c588398df20807bfac67d282ebff017c",
                    "locality": "Gautam Buddha Nagar",
                    "areaName": "Noida Expressway",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "American",
                        "Fast Food",
                        "Snacks",
                        "Korean",
                        "Burgers",
                        "Beverages"
                    ],
                    "avgRating": 3.8,
                    "parentId": "468084",
                    "avgRatingString": "3.8",
                    "totalRatingsString": "67",
                    "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 4.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "4.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-12 03:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                "description": "OnlyOnSwiggy"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                            "description": "OnlyOnSwiggy"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {},
                            "textBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "66% OFF",
                        "subHeader": "UPTO ₹126"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=788618&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    }
]

const burgerKing = {
    name: "Burger King",
    imageSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/5/23/72959900-cc2d-4f4d-a89e-c58cc4e810eb_9b23f3dc-1102-42ba-89b2-2ba99957afde.jpg",
    cuisines: ["Burgers", "American"],
    rating: 4.2
}


//optional chaining
//not mandatory to name it as props
//any arguments passed to this functional component will come as a parameter (we called here props)
// const RestaurantCard = (props) => {

//since we already know what params are we passing under props, we can destructure on the fly(named should be same as argument passed)
// const RestaurantCard = ({restaurant}) => {
    // console.log(props);
    //we can further destructure
    // const {name, cuisines, avgRating, cloudinaryImageId} = restaurant?.card?.card?.info;

const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId}) => {
    return(
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} alt="Restaurant Logo" />
            <h2>{name}</h2>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
        </div>
    );
};

const Body = () => {
    return (
        /*{ <div className="restaurant-list">
            <RestaurantCard restaurant = {restaurantList[0]}/>
            <RestaurantCard restaurant = {restaurantList[1]}/>
            <RestaurantCard restaurant = {restaurantList[2]}/>
            <RestaurantCard restaurant = {restaurantList[3]}/>
            <RestaurantCard restaurant = {restaurantList[4]}/>
            <RestaurantCard restaurant = {restaurantList[5]}/>
            <RestaurantCard restaurant = {restaurantList[6]}/>
            <RestaurantCard restaurant = {restaurantList[7]}/>
            <RestaurantCard restaurant = {restaurantList[8]}/>
            <RestaurantCard restaurant = {restaurantList[9]}/>
            <RestaurantCard restaurant = {restaurantList[10]}/>
            <RestaurantCard restaurant = {restaurantList[11]}/>
            <RestaurantCard restaurant = {restaurantList[12]}/>
            <RestaurantCard restaurant = {restaurantList[13]}/>
            <RestaurantCard restaurant = {restaurantList[14]}/>
        </div>  }*/

         <div className="restaurant-list">
            {/* either pass as named props or spread all key-vallue pair inside info while passing */}
            {/* <RestaurantCard name={restaurantList[0].card?.card?.info?.name} cuisines={restaurantList[0].card?.card?.info?.cuisines}/> */}

            {/* <RestaurantCard {...restaurantList[0].card?.card?.info} />
            <RestaurantCard {...restaurantList[1].card?.card?.info} />
            <RestaurantCard {...restaurantList[2].card?.card?.info} />
            <RestaurantCard {...restaurantList[3].card?.card?.info} />
            <RestaurantCard {...restaurantList[4].card?.card?.info} />
            <RestaurantCard {...restaurantList[5].card?.card?.info} />
            <RestaurantCard {...restaurantList[6].card?.card?.info} />
            <RestaurantCard {...restaurantList[7].card?.card?.info} />
            <RestaurantCard {...restaurantList[8].card?.card?.info} />
            <RestaurantCard {...restaurantList[9].card?.card?.info} />
            <RestaurantCard {...restaurantList[10].card?.card?.info} />
            <RestaurantCard {...restaurantList[11].card?.card?.info} />
            <RestaurantCard {...restaurantList[12].card?.card?.info} />
            <RestaurantCard {...restaurantList[13].card?.card?.info} />
            <RestaurantCard {...restaurantList[14].card?.card?.info} /> */}

            {/* BEST WAY */}
            {
                restaurantList.map(restaurant => {
                    const info = restaurant?.card?.card?.info;
                    return <RestaurantCard key={info.id} {...info} />
                })
            }
        </div>
    );
};

const Footer = () => {
    return (
        <h4>footer</h4>
    )
}
/* JSX can only have one parent, either I can write div but that would be unnecessary
    thats why React provides React.Fragment, it is like a empty tag
    => writing React.Frament looks ugly, so we can alo write empty tag
    ! <React.Fragment> == <>
 */
const AppLayout = () => {
    return (
        // <div>
        // <React.Fragment>
        <>
            <HeaderComponent />
            <Body />
            <Footer />
        </>
        // </React.Fragment>
        // </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);