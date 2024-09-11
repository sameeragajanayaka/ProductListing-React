import React from "react";
import HeaderMain from "./../../components/HeaderMain";

const Create = () => {
  return (
    <div className="App pb-5">
      <HeaderMain cate="Create" />
      <div className="container">
        <div className="row pt-4 pb-2">
          <div className="col-10 offset-1 center">
            <h2>Add New Products</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row pb-4">
          <div
            className="col-12 col-md-6 offset-md-3 p-3 center"
            style={{
              backgroundColor: "#e8e6e5",
              borderRadius: "20px",
              border: "solid",
              borderWidth: "2px",
              borderColor: "#bfbdbd",
            }}
          >
            <div className="form-group mb-3">
              <label for="exampleInputTitle" className="mb-2">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputTitle"
                placeholder="Enter Title"
              />
            </div>
            <div className="form-group mb-3">
              <label for="exampleInputColour" className="mb-2">
                Price (LKR)
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleInputPrice"
                placeholder="Price"
              />
            </div>
            <div className="form-group mb-3">
              <label for="exampleInputColour" className="mb-2">
                Colour
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputColour"
                placeholder="Colour"
              />
            </div>
            <div className="form-group mb-3">
              <label for="exampleInputCate" className="mb-2">
                Category
              </label>
              <select id="exampleInputCate" class="form-control">
                <option value="Bag">Bag</option>
                <option value="Shoes">Shoes</option>
                <option value="Watch">Watch</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <label for="exampleInputImage" className="mb-2">
                Image Url
              </label>
              <input
                type="file"
                class="form-control"
                id="exampleInputImage"
                placeholder="Image"
              />
            </div>
            <button type="submit" className="btn btn-primary mb-3">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="container rounded-xs">
            <div className="col-10 offset-1 table-responsive"  style={{borderRadius:'20px'}}>
              <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Colour</th>
                  <th>Category</th>
                  <th>Image Url</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>aasd</td>
                  <td>aasd</td>
                  <td>aasd</td>
                  <td>aasd</td>
                  <td>aasd</td>
                </tr>
                </tbody>
              </table>
            </div>
      </div>
    </div>
  );
};

export default Create;
