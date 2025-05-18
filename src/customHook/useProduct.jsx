import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/slices/ProductSlice';
import { Products } from '../assets/mockData';

const useProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
  
      dispatch(setProducts(Products));
  }, []);

  return products;
};

export default useProduct;
