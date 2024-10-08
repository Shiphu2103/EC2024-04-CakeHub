import React from 'react';
import { FaEdit, FaSave } from 'react-icons/fa';
import { Ingredient } from '../../../utils/interfaces';

interface IngredientRowProps {
  ingredient: Ingredient;
  isEditing: string | null;
  handleEdit: (id: string) => void;
  handleSave: (
    id: string,
    ingredientData: {
      name: string;
      price: number;
      unit: string;
      quantity: number;
      perQuantity: number;
      expiryDate: Date;
    },
  ) => void;
  handleChange: (id: string, field: string, value: string | number) => void;
}

const IngredientRow: React.FC<IngredientRowProps> = ({
  ingredient,
  isEditing,
  handleEdit,
  handleSave,
  handleChange,
}) => {
  return (
    <tr key={ingredient.id} className="odd:bg-white even:bg-gray-50">
      <td className="border-b px-4 py-3 text-center">
        {isEditing === ingredient.id ? (
          <input
            type="text"
            value={ingredient.id}
            onChange={(e) => handleChange(ingredient.id, 'id', e.target.value)}
            className="w-full border-b px-2"
          />
        ) : (
          ingredient.id
        )}
      </td>
      <td className="border-b px-4 py-3 text-center">
        {isEditing === ingredient.id ? (
          <input
            type="text"
            value={ingredient.name}
            onChange={(e) => handleChange(ingredient.id, 'name', e.target.value)}
            className="w-full border-b px-2"
          />
        ) : (
          ingredient.name
        )}
      </td>
      <td className="border-b px-4 py-3 text-center">
        {isEditing === ingredient.id ? (
          <input
            type="text"
            value={ingredient.price}
            onChange={(e) => handleChange(ingredient.id, 'price', Number(e.target.value))}
            className="w-full border-b px-2"
          />
        ) : (
          Number(ingredient.price).toLocaleString() + ' VND'
        )}
      </td>
      <td className="border-b py-3 pl-4 text-left">
        {isEditing === ingredient.id ? (
          <input
            type="number"
            value={ingredient.perquantity}
            onChange={(e) => handleChange(ingredient.id, 'perquantity', Number(e.target.value))}
            className="w-full border-b px-2"
          />
        ) : (
          '/ ' + ingredient.perquantity.toLocaleString()
        )}
      </td>
      <td className="border-b py-3 text-left">
        {isEditing === ingredient.id ? (
          <input
            type="text"
            value={ingredient.unit}
            onChange={(e) => handleChange(ingredient.id, 'unit', e.target.value)}
            className="w-full border-b px-2"
          />
        ) : (
          ingredient.unit
        )}
      </td>
      <td className="border-b px-4 py-3 text-center">
        {isEditing === ingredient.id ? (
          <input
            type="number"
            value={ingredient.quantity}
            onChange={(e) => handleChange(ingredient.id, 'quantity', Number(e.target.value))}
            className="w-full border-b px-2"
          />
        ) : (
          ingredient.quantity.toLocaleString()
        )}
      </td>
      <td className="border-b px-4 py-3 text-center">
        {isEditing === ingredient.id ? (
          <input
            type="date"
            value={new Date(ingredient.expiryDate).toISOString().split('T')[0]}
            onChange={(e) => handleChange(ingredient.id, 'expiryDate', e.target.value)}
            className="w-full border-b px-2"
          />
        ) : (
          new Date(ingredient.expiryDate).toISOString().split('T')[0]
        )}
      </td>

      <td className={`border-b px-4 py-3 text-center ${ingredient.status ? 'text-green-500' : 'text-red-500'}`}>
        {ingredient.status ? 'Còn hạn' : 'Hết hạn'}
      </td>
      <td className="flex justify-center space-x-2 px-4 py-3 text-center">
        {isEditing === ingredient.id ? (
          <button
            onClick={() =>
              handleSave(ingredient.id, {
                name: ingredient.name,
                price: ingredient.price,
                unit: ingredient.unit,
                quantity: ingredient.quantity,
                perQuantity: ingredient.perquantity,
                expiryDate: new Date(ingredient.expiryDate),
              })
            }
            className="text-blue-500 transition duration-300 hover:text-blue-700"
          >
            <FaSave className="h-5 w-5" />
          </button>
        ) : (
          <button
            onClick={() => handleEdit(ingredient.id)}
            className="text-blue-500 transition duration-300 hover:text-blue-700"
          >
            <FaEdit className="h-5 w-5" />
          </button>
        )}
      </td>
    </tr>
  );
};

export default IngredientRow;
