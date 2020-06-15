import React, { useEffect, useState } from 'react';
import * as actions from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../components/Categories/Categories';
import LoadingSpinner from '../components/SharedComponents/Spinners/LoadingSpinner';
import PageHeader from '../components/SharedComponents/PageHeader/PageHeader';
import AddCategoryModal from '../components/Categories/Modals/AddCategoryModal';
import DeleteModal from '../components/Categories/Modals/DeleteModal';
import EditCategoryModal from '../components/Categories/Modals/EditCategoryModal';

import Container from 'react-bootstrap/Container';

const CategoriesPage = () => {
  const [deleteModalStatus, setDeleteModalStatus] = useState(false);
  const [editModalStatus, setEditModalStatus] = useState(false);
  const [addModalStatus, setAddModalStatus] = useState(false);

  const categories = useSelector((state) => state.locations.categories);
  const loading = useSelector((state) => state.locations.loading);
  const focusedCategory = useSelector(
    (state) => state.locations.focusedCategory
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.initialGetCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container fluid>
        <PageHeader
          pageTitle='Categories'
          addTitle='Add Category'
          setDeleteModalStatus={setDeleteModalStatus}
          setEditModalStatus={setEditModalStatus}
          setAddModalStatus={setAddModalStatus}
          focused={focusedCategory}
        />
        {loading ? <LoadingSpinner /> : <Categories categories={categories} />}
      </Container>
      <AddCategoryModal
        modalStatus={addModalStatus}
        setModalStatus={setAddModalStatus}
      />
      <DeleteModal
        modalStatus={deleteModalStatus}
        setModalStatus={setDeleteModalStatus}
      />
      <EditCategoryModal
        focusedCategory={focusedCategory}
        modalStatus={editModalStatus}
        setModalStatus={setEditModalStatus}
      />
    </>
  );
};

export default CategoriesPage;
