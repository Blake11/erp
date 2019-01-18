# MongoDB config file for Eve

MONGO_HOST = '127.0.0.1'
MONGO_PORT = 27017

MONGO_DBNAME = 'erp'

RESOURCE_METHODS = ['GET', "POST"]

ITEM_METHODS = ['GET', 'PATCH', 'PUT', 'DELETE']

IF_MATCH = False

RENDERERS = ['eve.render.JSONRenderer']

user = {
    'item_title': 'user',

    'resource_methods': ['GET', 'POST'],

    'schema': {
        'firstname': {
            'type': 'string',
            'minlength': 3,
            'maxlength': 25,
            'required': True
        },

        'lastname': {
            'type': 'string',
            'minlength': 3,
            'maxlength': 25,
            'required': True
        },

        'username': {
            'type': 'string',
            'minlength': 3,
            'maxlength': 25,
            'required': True,
            'unique': True
        },

        'password': {
            'type': 'string',
            'minlength': 8,
            'maxlength': 25,
            'required': True
        },

        'phonenumber': {
            'type': 'string',
            'minlength': 10,
            'maxlength': 16,
            'required': False
        },

        'address': {
            'type': 'list',
            'schema': {
                'type': 'dict',
                'schema': {
                    'country': {
                        'type': 'string',
                        'minlength': 3,
                        'maxlength': 25,
                    },

                    'city': {
                        'type': 'string',
                        'minlength': 3,
                        'maxlength': 25,
                    },

                    'street': {
                        'type': 'string',
                        'minlength': 1,
                        'maxlength': 50,
                    },

                    'number': {
                        'type': 'string',
                        'minlength': 1,
                        'maxlength': 15,
                    }
                },
                'required': False
            }
        },

        'role': {
            'required': False,
            'type': 'string',
            'allowed': ['client', 'admin', 'employee'],
            'default': 'client'
        }

    }
}
product = {
    'item_title': 'product',

    'resource_methods': ['GET', 'POST'],

    'schema': {
        'SKU': {
            'type': 'string',
            'unique': True,
            'required': True
        },

        'title': {
            'type': 'string',
            'required': True,
            'minlength': 5,
            'maxlength': 255,
        },

        'description': {
            'type': 'string',
            'required': True,
            'minlength': 5,
            'maxlength': 255,
        },

        'price': {
            'type': 'number',
            'min': 1,
            'required': True
        },

        'image': {
            'type': 'media',
            'required': False
        },

        'category': {
            'type': 'objectid',
            'data_relation': {
                'resource': 'product_category',
                'field': '_id',
                'embeddable': True
            },
            'required': True
        }
    }

}
shopping_cart = {
    'item_title': 'shopping_cart',

    'resource_methods': ['GET', 'POST'],

    'schema': {
        'user': {
            'type': 'objectid',
            'data_relation': {
                'resource': 'user',
                'field': '_id',
                'embeddable': True,
            },
            'required': True,
            'unique': True,
        },

        'products': {
            'type': 'list',
            'schema': {
                'type': 'dict',
                'schema': {
                    'quantity': {
                        'type': 'integer',
                        'required': True,
                        'min': 1
                    },
                    'product': {
                        'type': 'objectid',
                        'data_relation': {
                            'resource': 'product',
                            'field': '_id',
                            'embeddable': True
                        },
                        'required': True
                    }
                }
            }
        }
    }
}
receipt = {
    'item_title': 'receipt',

    'resource_methods': ['GET', 'POST'],

    'schema:': {
        'user': {
            'type': 'objectid',
            'data_relation': {
                'resource': 'user',
                'field': '_id',
                'embeddable': True,
            }
        },

        'products': {
            'type': 'list',
            'schema': {
                'type': 'dict',
                'schema': {
                    'quantity': {
                        'type': 'integer',
                        'required': True,
                        'min': 1
                    },
                    'product': {
                        'type': 'objectid',
                        'data_relation': {
                            'resource': 'product',
                            'field': '_id',
                            'embeddable': True
                        },
                        'required': True
                    }
                }
            }
        }
    }

}
product_category = {
    'item_title': 'product_category',

    'resource_methods': ['GET', 'POST'],

    'schema': {
        'title': {
            'type': 'string',
            'required': True,
            'unique': True,
            'minlength': 5,
            'maxlength': 25,
        },

        'description': {
            'type': 'string',
            'required': True,
            'minlength': 5,
            'maxlength': 25,
        },
    }
}
providers = {
    'item_title': 'providers',

    'resource_methods': ['GET', 'POST'],

    'schema': {
        'name': {
            'type': 'string'
        },

        'description': {
            'type': 'string'
        },

        'image': {
            'type': 'media'
        }
    }
}
stocks = {
    'item_title': 'stocks',

    'resource_methods': ['GET', 'POST'],

    'schema': {
        'product': {
            'type': 'objectid',
            'data_relation': {
                'resource': 'product',
                'field': '_id',
                'embeddable': True
            }
        },

        'quantity': {
            'type': 'integer'
        },

        'provider': {
            'type': 'objectid',
            'data_relation': {
                'resource': 'providers',
                'field': '_id',
                'embeddable': True
            }
        },
    }
}

DOMAIN = {
    'user': user,
    'product': product,
    'shopping_cart': shopping_cart,
    'receipt': receipt,
    'product_category': product_category,
    'providers': providers,
    'stocks': stocks
}
