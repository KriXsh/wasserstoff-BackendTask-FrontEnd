// src/components/Annotation/AnnotationTool.js  (if needed for manual annotation)
import React, { useState, useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const AnnotationTool = ({ imageUrl, labels, onSubmit }) => {
  const [annotations, setAnnotations] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas('annotation-canvas');
    canvasRef.current = canvas;

    fabric.Image.fromURL(imageUrl, (img) => {
      img.scaleToWidth(canvas.width);
      img.scaleToHeight(canvas.height);
      canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
    });

    canvas.on('object:added', (e) => {
      if (e.target && e.target.type === 'rect') {
        const newAnnotation = {
          id: e.target.id,
          label: labels[0], // Default to the first label
          topLeft: { x: e.target.left, y: e.target.top },
          bottomRight: { x: e.target.left + e.target.width, y: e.target.top + e.target.height },
        };
        setAnnotations((prevAnnotations) => [...prevAnnotations, newAnnotation]);
      }
    });

    canvas.on('object:modified', (e) => {
      if (e.target && e.target.type === 'rect') {
        setAnnotations((prevAnnotations) =>
          prevAnnotations.map((annotation) =>
            annotation.id === e.target.id
              ? {
                  ...annotation,
                  topLeft: { x: e.target.left, y: e.target.top },
                  bottomRight: { x: e.target.left + e.target.width, y: e.target.top + e.target.height },
                }
              : annotation
          )
        );
      }
    });

    return () => {
      canvas.dispose();
    };
  }, [imageUrl, labels]);

  const handleLabelChange = (id, newLabel) => {
    setAnnotations((prevAnnotations) =>
      prevAnnotations.map((annotation) =>
        annotation.id === id ? { ...annotation, label: newLabel } : annotation
      )
    );
  };

  const handleAddRectangle = () => {
    const canvas = canvasRef.current;
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      width: 100,
      height: 100,
      fill: 'rgba(255, 0, 0, 0.5)',
      id: Math.random().toString(36).substr(2, 9),
    });
    canvas.add(rect);
  };

  const handleSubmit = () => {
    onSubmit(annotations);
  };

  return (
    <div>
      <div>
        <button className="btn btn-primary" onClick={handleAddRectangle}>
          Add Bounding Box
        </button>
      </div>
      <div>
        <canvas id="annotation-canvas" width="800" height="600" style={{ border: '1px solid #000' }}></canvas>
      </div>
      <div>
        {annotations.map((annotation) => (
          <div key={annotation.id} className="form-group">
            <label>Label for bounding box {annotation.id}</label>
            <select
              className="form-control"
              value={annotation.label}
              onChange={(e) => handleLabelChange(annotation.id, e.target.value)}
            >
              {labels.map((label) => (
                <option key={label} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div>
        <button className="btn btn-success" onClick={handleSubmit}>
          Submit Annotations
        </button>
      </div>
    </div>
  );
};

export default AnnotationTool;
