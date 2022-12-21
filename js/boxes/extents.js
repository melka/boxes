class Extents {
    __slots__ = "xmin ymin xmax ymax".split()

    __init__(xmin=float('inf'),ymin=float('inf'),xmax=float('-inf'),ymax=float('-inf')) {
        this.xmin = xmin
        this.ymin = ymin
        this.xmax = xmax
        this.ymax = ymax
    }
        

    add(x,y) {
        this.xmin = min(this.xmin,x)
        this.xmax = max(this.xmax,x)
        this.ymin = min(this.ymin,y)
        this.ymax = max(this.ymax,y)
    }
        

    extend(l) {
        for x,y in l:
            this.add(x,y)
    }       

    __add__(extent) {
        //todo: why can this happen?
        if (extent == 0) {
            return Extents(this.xmin,this.ymin,this.xmax,this.ymax)
        }            
        return Extents(
            min(this.xmin,extent.xmin),min(this.ymin,extent.ymin),
            max(this.xmax,extent.xmax),max(this.ymax,extent.ymax)
        )
    }  

    __radd__(extent) {
        if (extent == 0) {
            return Extents(this.xmin,this.ymin,this.xmax,this.ymax)
        }            
        return this.__add__(extent)
    }        

    get_width() {
        return this.xmax-this.xmin
    }        

    get_height() {
        return this.ymax-this.ymin
    }        

    width = property(get_width)
    height = property(get_height)

    __repr__() {
        return 'Extents ({self.xmin},{self.ymin})-({self.xmax},{self.ymax})'
    }        
}
    

    
