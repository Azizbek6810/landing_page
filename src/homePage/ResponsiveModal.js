import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import SearchIcon from "@material-ui/icons/Search";

const ResponsiveModal = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="responsivemodal">
      <Button onClick={toggle}>
        <SearchIcon />
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Search</ModalHeader>
        <ModalBody>
          <div className="searchSec">
            <form>
              <input
                placeholder="Search for Products, Brands & Categories"
                type="text"
                className="searchInput"
              />
              <button className="searchBtn" type="button">
                <SearchIcon />
              </button>
            </form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ResponsiveModal;
