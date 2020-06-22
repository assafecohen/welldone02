import React, { useEffect, useState } from 'react';
import * as actions from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import Locations from '../components/Locations/Locations';
import LoadingSpinner from '../components/SharedComponents/Spinners/LoadingSpinner';
import PageHeader from '../components/SharedComponents/PageHeader/PageHeader';
import AddLocationModal from '../components/Locations/Modals/AddLocationModal';
import DeleteModal from '../components/Locations/Modals/DeleteModal';
import EditLocationModal from '../components/Locations/Modals/EditLocationModal';
import GoogleMaps from '../components/GoogleMaps/GoogleMaps';
import Filters from '../components/Locations/FIlters/Filters';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LocationsPage = () => {
  const [deleteModalStatus, setDeleteModalStatus] = useState(false);
  const [editModalStatus, setEditModalStatus] = useState(false);
  const [addModalStatus, setAddModalStatus] = useState(false);

  const locations = useSelector((state) => state.locations.locations);
  const categories = useSelector((state) => state.locations.categories);
  const loading = useSelector((state) => state.locations.loading);
  const focusedLocation = useSelector(
    (state) => state.locations.focusedLocation
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.initialGetLocations());
    //pulling categories data in case someone enter direct to /locations111
    dispatch(actions.initialGetCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageHeader
        pageTitle='Locations'
        addTitle='Add Location'
        setDeleteModalStatus={setDeleteModalStatus}
        setEditModalStatus={setEditModalStatus}
        setAddModalStatus={setAddModalStatus}
        focused={focusedLocation}
      />
      <Filters categories={categories} />
      <Row>
        <Col sm={4} style={{ height: '650px', overflow: 'auto' }}>
          {loading ? <LoadingSpinner /> : <Locations locations={locations} />}
        </Col>
        <Col sm={8} style={{ padding: 0 }}>
          <GoogleMaps marker={focusedLocation} />
        </Col>
      </Row>

      <AddLocationModal
        modalStatus={addModalStatus}
        setModalStatus={setAddModalStatus}
        categories={categories}
      />
      <DeleteModal
        modalStatus={deleteModalStatus}
        setModalStatus={setDeleteModalStatus}
      />
      <EditLocationModal
        focusedLocation={focusedLocation}
        modalStatus={editModalStatus}
        setModalStatus={setEditModalStatus}
        categories={categories}
      />
    </>
  );
};

export default LocationsPage;
