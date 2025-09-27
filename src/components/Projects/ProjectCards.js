import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BsHeart, BsHeartFill, BsEye, BsChevronLeft, BsChevronRight } from "react-icons/bs";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = [
    props.imgPath, 
    ...(props.additionalImages || []) 
  ];

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentImageIndex(0); 
  };
  const handleLike = () => setIsLiked(!isLiked);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') handleCloseModal();
  };

  return (
    <>
      <div className="large-image-wrapper">
        <Card className="project-card-view large-image-card">
          {/* Large Image Container */}
          <div className="large-image-container">
            <Card.Img 
              variant="top" 
              src={props.imgPath} 
              alt="card-img"
              className="large-project-image fitted-image"
            />
            
            {/* Dark gradient overlay */}
            <div className="image-gradient-overlay"></div>
            
           
            {projectImages.length > 1 && (
              <div className="images-count-badge">
                <BsEye className="me-1" /> {projectImages.length}
              </div>
            )}
            
            {/* Floating Action Buttons */}
            <div className="floating-actions">
              <button 
                className="floating-btn eye-btn"
                onClick={handleShowModal}
                title={projectImages.length > 1 ? `show ${projectImages.length} picture` : "Show full picture"}

              >
                <BsEye />
              </button>
              <button 
                className={`floating-btn heart-btn ${isLiked ? 'liked' : ''}`}
                onClick={handleLike}
                title={isLiked ? "Unlike" : "I like"}

              >
                {isLiked ? <BsHeartFill /> : <BsHeart />}
              </button>
            </div>

            {/* Bottom Content Overlay */}
            <div className="image-bottom-content">
              <Card.Title className="large-image-title">{props.title}</Card.Title>
              
              {/* Tech stack badges */}
              {/* <div className="tech-badges">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS3</span>
                <span className="tech-badge">JS</span>
              </div> */}
            </div>
          </div>

          {/* Compact Content Section */}
          <Card.Body className="compact-content">
            <Card.Text className="compact-description">
              {props.description}
            </Card.Text>
            
            <div className="compact-buttons">
              {props.ghLink && (
                <Button 
                  variant="primary" 
                  href={props.ghLink} 
                  target="_blank"
                  className="large-image-btn primary-btn"
                >
                  <BsGithub className="btn-icon" />
                  <span>{props.isBlog ? "Blog" : "Code"}</span>
                </Button>
              )}

              {!props.isBlog && props.demoLink && (
                <Button
                  variant="primary"
                  href={props.demoLink}
                  target="_blank"
                  className="large-image-btn secondary-btn"
                >
                  <CgWebsite className="btn-icon" />
                  <span>Demo</span>
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      </div>

      {/* Modal للعرض مع Pagination */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        size="lg"
        centered
        className="image-modal"
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title className="modal-title-custom">
            <span>{props.title}</span>
            {projectImages.length > 1 && (
              <span className="image-counter">
                {currentImageIndex + 1} / {projectImages.length}
              </span>
            )}
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body className="modal-body-custom">
          {/* Image Container مع Navigation */}
          <div className="modal-image-container">
            {/* Previous Button */}
            {projectImages.length > 1 && (
              <button 
                className="image-nav-btn prev-btn" 
                onClick={prevImage}
                title="Fisrt pic(←)"
              >
                <BsChevronLeft />
              </button>
            )}

            {/* Current Image */}
            <img 
              src={projectImages[currentImageIndex]} 
              alt={`${props.title} - صورة ${currentImageIndex + 1}`}
              className="modal-image"
            />

            {/* Next Button - يظهر فقط إذا كان هناك أكثر من صورة */}
            {projectImages.length > 1 && (
              <button 
                className="image-nav-btn next-btn" 
                onClick={nextImage}
                title="Next pic(→)"
              >
                <BsChevronRight />
              </button>
            )}
          </div>

          {projectImages.length > 1 && (
            <div className="image-pagination">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  className={`pagination-dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                  title={`Picture${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Project Description */}
          <div className="modal-description">
            <p>{props.description}</p>
            {/* <div className="modal-tech-badges">
              <span className="modal-tech-badge">HTML</span>
              <span className="modal-tech-badge">CSS3</span>
              <span className="modal-tech-badge">JavaScript</span>
            </div> */}
          </div>

          {/* Keyboard Instructions */}
          {projectImages.length > 1 && (
            <div className="keyboard-instructions">
              <small>
              </small>
            </div>
          )}
        </Modal.Body>
        
        <Modal.Footer className="modal-footer-custom">
          {props.ghLink && (
            <Button 
              variant="primary" 
              href={props.ghLink} 
              target="_blank"
              className="modal-btn primary-modal-btn"
            >
              <BsGithub className="btn-icon" />
              <span>GitHub</span>
            </Button>
          )}
          {props.demoLink && (
            <Button 
              variant="primary" 
              href={props.demoLink} 
              target="_blank"
              className="modal-btn secondary-modal-btn"
            >
              <CgWebsite className="btn-icon" />
              <span>Live Demo</span>
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCards;