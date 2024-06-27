import React, { useState } from 'react';

function Taminities() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="popup">
        <div className="popup-content">
          <button className="close-button" onClick={handleClose}>X</button>
          <h2>Amenities</h2>
          <ul>
            <li>13. Entrance plaza</li>
            <li>14. Balinese garden</li>
            <li>15. Balinese pavilion</li>
            <li>16. School bus pick-up & drop-off</li>
            <li>17. School bus waiting pavilion</li>
            <li>18. Lilly pond</li>
            <li>19. Sculpture court</li>
            <li>20. Contoured garden</li>
            <li>21. Party lawn</li>
            <li>22. Barbeque counter</li>
            <li>23. Reflexology pathway</li>
            <li>24. Taichi Meditation</li>
            <li>25. Tree plaza</li>
            <li>26. Yoga and meditation deck</li>
            <li>27. Hammock garden</li>
            <li>28. Screening wall and stage</li>
            <li>29. Swimming pool with water spouts</li>
            <li>30. Kid’s pool with water jets</li>
            <li>31. Outdoor Amphitheatre seating area</li>
            <li>32. Reception and waiting lounge</li>
            <li>33. Multipurpose Party Hall</li>
            <li>34. AV Room</li>
            <li>35. Indoor kids play area</li>
            <li>36. Gym</li>
            <li>37. Weight training</li>
            <li>38. Indoor games room</li>
            <li>39. Pergola seating</li>
            <li>40. Mini golf</li>
          </ul>
        </div>
      </div>
    )
  );
}

export default Taminities;
