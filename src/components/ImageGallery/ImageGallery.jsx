import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Error, ImageGalleryList } from './imageGallery.styled';
import { Loading } from 'components/Loader/Loader';
import PixabayApi from '../API/pixaby-api';
import { toast } from 'react-toastify';
import { ModalImage } from 'components/Modal/Modal';
import { LoadMore } from 'components/Button/Button.styled';

export class ImageGallery extends Component {
  state = {
    images: [],
    query: '',
    error: false,
    status: 'idle',
    page: 1,
    showModal: false,
    activeCardId: 0,
    alt: '',
    largeImage: '',
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;

    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.setState({ status: 'pending', page: nextPage });

      PixabayApi.fetchPixabay(nextQuery, nextPage)
        .then(({ hits, totalHits }) => {
          if (totalHits === 0) {
            this.setState({ status: 'idle' });
            return toast.warning('Not found images for this query. Try again.');
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            status: 'resolved',
            query: nextQuery,
          }));
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  IncrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  hangleImageClick = (largeImageURL, tags) => {
    this.setState({ largeImage: largeImageURL, alt: tags });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { error, status, images, showModal, largeImage, alt } = this.state;

    if (status === 'idle') {
      return <p>введите имя в поиск</p>;
    }

    if (status === 'rejectd') {
      return <Error>{error.message}</Error>;
    }

    if (status === 'resolved' || status === 'pending') {
      return (
        <>
          <ImageGalleryList>
            {images.map(({ id, webformatURL, tags, largeImageURL }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  webformatURL={webformatURL}
                  tags={tags}
                  largeImage={largeImageURL}
                  onClick={this.hangleImageClick}
                />
              );
            })}
          </ImageGalleryList>
          {this.state.status === 'pending' && <Loading />}
          <LoadMore type="button" onClick={this.IncrementPage}>
            {' '}
            load more
          </LoadMore>
          {showModal && (
            <ModalImage onClose={this.toggleModal}>
              <img className="modal-content" src={largeImage} alt={alt} />              
            </ModalImage>
          )}
        </>
      );
    }
  }
}
