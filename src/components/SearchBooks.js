import React, { useState, useEffect } from "react";
import { books } from "./SearchFilterData";

const SearchBooks = () => {
    const [filterList, setFilterList] = useState(books);
    const [selectedCategory, setSelectedCategory] = useState();    
    
    const handleCategoryChange = (event) => {
        const inputCategory = String(event.target.id);

        if (inputCategory === selectedCategory) {
            setSelectedCategory("");
        }
        else {
            setSelectedCategory(inputCategory);
        }
    };

    const filterByCategory = (filteredData) => {
        // Avoid filter for empty string
        if (!selectedCategory) {
            return filteredData;
        }

        const filteredBooks = filteredData.filter(
            (book) => book.category === selectedCategory 
        );
        return filteredBooks;
    }

    useEffect(() => {
        let filteredData = filterByCategory(books);
        setFilterList(filteredData);
        // eslint-disable-next-line
    }, [selectedCategory]);

    return (
        <div className="search">
            <div className="searchbook">
                <div className="category-filter">
                    <div id="category-options" onClick={handleCategoryChange}>
                        <div className={selectedCategory === "HTML-CSS" ? "active-option" : "filter-option"}
                            id="HTML-CSS"
                        >
                            HTML-CSS
                        </div>
                        <div className={selectedCategory === "JavaScript" ? "active-option" : "filter-option"}
                            id="JavaScript"
                        >
                            JavaScript
                        </div>
                        <div className={selectedCategory === "React.js" ? "active-option" : "filter-option"}
                            id="React.js"
                        >
                            React.js
                        </div>
                        <div className={selectedCategory === "Node.js" ? "active-option" : "filter-option"}
                            id="Node.js"
                        >
                            Node.js
                        </div>
                        <div className={selectedCategory === "PHP" ? "active-option" : "filter-option"}
                            id="PHP"
                        >
                            PHP
                        </div>
                        <div className={selectedCategory === "Web" ? "active-option" : "filter-option"}
                            id="Web"
                        >
                            Web
                        </div>
                    </div>
                </div>
                <div className="book-list">
                    {filterList.map((item, index) => (
                        <div className="book-item" key={index}>
                            <div className="book-detail">
                                <div className="book-img">
                                    <img className="book-image" src={item.image} alt="book-img" />
                                </div>
                                <div className="book-descript">
                                    <p className="book-name"><strong>Title: </strong>{`${item.name}`}</p>
                                    <p className="book-author"><strong>Author: </strong>{`${item.author}`}</p>
                                    <p className="book-year"><strong>Year: </strong>{`${item.year}`}</p>
                                    <p className="book-pages"><strong>Pages: </strong>{`${item.pages}`}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );   
}

export default SearchBooks;