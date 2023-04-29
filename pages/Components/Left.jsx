import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";
import { useState } from "react";
import styles from "../../styles/Left.module.css";
import findDoc from "../firebaseDB";
import { useEffect } from "react";

const Left = ({ setItems, items, setFilter }) => {
  const [category, setCatergory] = useState("metal");
  const [material, setMaterial] = useState("");
  const [type, setType] = useState("");

  const categoryChange = (e) => {
    setCatergory(e.target.value);
    if (e.target.value === "metal") {
      findDoc("metal")
        .then((data) => {
          setItems(data);
          setFilter(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      findDoc("plastic")
        .then((data) => {
          setItems(data);
          setFilter(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const materialChange = (e) => {
    const result = items.filter(({ material }) => material === e.target.value);
    setFilter(result);
    setMaterial(e.target.value);
  };
  const typeChange = (e) => {
    const result = items.filter(({ type }) => type === e.target.value);
    setFilter(result);
    setType(e.target.value);
  };

  useEffect(() => {
    findDoc("metal")
      .then((data) => {
        setItems(data);
        setFilter(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.left}>
      <div className={styles.category}>
        <div className={styles.category__heading}>Category</div>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={category}
          onChange={categoryChange}
        >
          <FormControlLabel
            value={"metal"}
            control={<Radio />}
            label="Metal"
            defaultChecked
          />
          <FormControlLabel
            value={"plastic"}
            control={<Radio />}
            label="Plastic"
          />
        </RadioGroup>
      </div>
      <div className={styles.category}>
        <div className={styles.category__heading}>Material</div>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={material}
          onChange={materialChange}
        >
          <FormControlLabel
            value={category === "metal" ? "mildSteel" : "nylon"}
            control={<Radio />}
            label={category === "metal" ? "Mild Steel" : "Nylon"}
          />
          <FormControlLabel
            value={category === "metal" ? "stainlessSteel" : "ABS"}
            control={<Radio />}
            label={category === "metal" ? "Stainless Steel" : "ABS"}
          />
          <FormControlLabel
            value={category === "metal" ? "aluminium" : "PVA"}
            control={<Radio />}
            label={category === "metal" ? "Aluminium" : "PVA"}
          />
        </RadioGroup>
      </div>
      <div className={styles.category}>
        <div className={styles.category__heading}>Type</div>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={type}
          onChange={typeChange}
        >
          <FormControlLabel
            value={category === "metal" ? "long" : "round"}
            control={<Radio />}
            label={category === "metal" ? "Long Products" : "Round"}
          />
          <FormControlLabel
            value={category === "metal" ? "flat" : "long"}
            control={<Radio />}
            label={category === "metal" ? "Flat Products" : "Long"}
          />
          {category === "metal" ? (
            <FormControlLabel
              value="semi"
              control={<Radio />}
              label="Semi Furnished"
            />
          ) : (
            ""
          )}
        </RadioGroup>
      </div>
    </div>
  );
};

export default Left;
