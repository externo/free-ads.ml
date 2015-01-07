app.factory('adsData', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl){
    var resource = $resource(baseServiceUrl + 'ads:adId', {adId: '@id'}, {
        update: {method: 'PUT'}
    });

    function getPublicAds(){
        return resource.query();
    }

    function editAd(adId, ad){
        return resource.update({id: adId}, ad);
    }

    function getAdById(){
        return resource.get({id: adId});
    }

    function addAd(ad){
        return resource.save(ad);
    }

    return {
        getPublicAds: getPublicAds,
        edit: editAd,
        get: getAdById
    }
}]);