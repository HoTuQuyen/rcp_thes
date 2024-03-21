import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import axios from "axios";
import Pagination from "react-bootstrap/Pagination";
import "./Product.css";
import { MDBInput } from "mdb-react-ui-kit";
import HeaderSub from "../Home/HeaderSub";
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";
import ChartButton from "./ChartButton";
const Product = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(30);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:8008/recipes");
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching forms:", error);
      }
    };

    fetchRecipes();
  }, []);
  // Index của món đầu tiên và cuối cùng của subset tương ứng với trang hiện tại
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Lọc danh sách món ăn dựa trên chữ cái được nhập
    const results = recipes.filter((recipe) =>
      recipe.recipes_name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Lọc danh sách món ăn dựa trên chữ cái được nhập
      const results = recipes.filter((recipe) =>
        recipe.recipes_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  };
  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  };

  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  const renderPaginationItems = () => {
    const maxPagesToShow = 5;
    const middlePage = Math.ceil(maxPagesToShow / 2);
    let startPage, endPage;

    if (totalPages <= maxPagesToShow) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= middlePage) {
      startPage = 1;
      endPage = maxPagesToShow;
    } else if (currentPage + middlePage >= totalPages) {
      startPage = totalPages - maxPagesToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - middlePage + 1;
      endPage = currentPage + middlePage - 1;
    }

    const items = [];
    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => paginate(i)}>
          {i}
        </Pagination.Item>
      );
    }

    if (startPage !== 1) {
      items.unshift(<Pagination.Ellipsis key="startEllipsis" />);
    }

    if (endPage !== totalPages) {
      items.push(<Pagination.Ellipsis key="endEllipsis" />);
    }

    return items;
  };

  return (
    <div className="product">
      <HeaderSub />

      <div className="product-items" style={{ marginTop: "6rem" }}>
        <div className="select-items" style={{ marginLeft: "4rem" }}>
          <Dropdown title="Category">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Menu title="Item 2">
              <Dropdown.Item>Item 2A</Dropdown.Item>
              <Dropdown.Item>Item 2B</Dropdown.Item>
            </Dropdown.Menu>
            <Dropdown.Item>Item 3</Dropdown.Item>
            <Dropdown.Menu title="Item 4">
              <Dropdown.Menu title="Item 4A">
                <Dropdown.Item>Item 4A-A</Dropdown.Item>
                <Dropdown.Item>Item 4A-B</Dropdown.Item>
              </Dropdown.Menu>
              <Dropdown.Item>Item 4B</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Container>
          <div className="nav-search">
            <div className="form-outline" data-mdb-input-init>
              <MDBInput
                type="text"
                id="formTextExample1"
                className="form-control"
                aria-describedby="textExample1"
                placeholder="Kind Of Food"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
              />
              <div style={{ maxHeight: "160px", overflowY: "auto" }}>
                {searchResults.map((recipe) => (
                  <div key={recipe.id} style={{ marginBottom: "10px" }}>
                    <Card.Body>
                      <Link
                        to={`/visualization/${recipe.id}`}
                        style={{ textDecoration: "none" }}>
                        <p>{truncateDescription(recipe.recipes_name, 50)}</p>
                      </Link>
                    </Card.Body>
                  </div>
                ))}
              </div>
            </div>
            <div id="textExample1" className="form-text">
              We have a board of food.
            </div>
          </div>
          <Row>
            {currentRecipes.map((recipe, index) => (
              <Col
                style={{ marginTop: "1rem" }}
                key={recipe.recipes_id}
                xs={6}
                md={4}>
                <Link
                  to={`/visualization/${recipe.id}`}
                  style={{ textDecoration: "none" }}>
                  <Card
                    style={{
                      width: "17rem",
                      height: "18.5rem",
                      overflow: "hidden",
                    }}>
                    <Card.Img
                      variant="top"
                      src={recipe.img_src}
                      style={{ width: "17rem", height: "12rem" }}
                    />
                    <Card.Body style={{ padding: "1rem" }}>
                      <Card.Title title={recipe.recipes_name}>
                        {truncateDescription(recipe.recipes_name, 21)}
                      </Card.Title>

                      {/* <Button variant="success" href="/dv">
                      Start Visualizing
                    </Button> */}
                      <ChartButton />
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div style={{ marginTop: "6rem" }}>
        <Pagination style={{ display: "flex", justifyContent: "flex-end" }}>
          <Pagination.First onClick={() => paginate(1)} />
          <Pagination.Prev
            onClick={() => paginate(Math.max(1, currentPage - 1))}
          />
          {renderPaginationItems()}
          <Pagination.Next
            onClick={() => paginate(Math.min(currentPage + 1, totalPages))}
          />
          <Pagination.Last onClick={() => paginate(totalPages)} />
        </Pagination>
      </div>
    </div>
  );
};

export default Product;
