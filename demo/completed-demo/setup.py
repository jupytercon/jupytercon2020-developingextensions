from setuptools import setup

setup(
    name="mybutton",
    include_package_data=True,
    data_files=[
        (
            "mybutton",
            ["mybutton.json"]
        ),
    ]
)