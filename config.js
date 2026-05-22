const mapConfig = {
    "title": "OBIA Land Cover Classification",
    "author": "Pham Hien",
    "contact": "contact@example.com",
    "colors": {
        "Building": "#4CAF50",
        "Vegetation": "#2196F3",
        "Water": "#F44336"
    },
    "layers": [
        {
            "name": "LULC-2025-RF-3Class",
            "file": "https://huggingface.co/datasets/lopmaybay/lulcHaiPhongCity/resolve/main/layer_0.geojson",
            "field": "Class_Name"
        }
    ]
};